// パッチの日の点検: 今の tarkov.dev のデータを、同梱スナップショット（前回の点検で確かめた状態）と比べ、
// ツールが手で持っている表（脱出の条件・電源・階の上書き・乗り継ぎの条件・地図の位置合わせ・階の範囲）がまだ合っているかを調べる。
// 使い方(プロジェクトのフォルダで): node tools/patch-check.mjs
//   → 画面に結果を出し、checks/patch-report-日時.md にも保存する（checks/ は公開しない）。
//   「直す必要あり」が 1 件でもあれば終了コード 1。
// 確かめ終わったら node tools/gen-snapshot.mjs でスナップショットを作り直す（次の点検の基準になる）。
import fs from "fs"; import path from "path";
import { root, readHtml, fetchMode, loadSnapshot, pickConsts } from "./fetch-lib.mjs";

// --html <ファイル>: 点検スクリプト自体の試験用（わざと壊した index.html の写しを読ませる。結果のファイルは保存しない）
const hi = process.argv.indexOf("--html");
const html = hi > 0 ? fs.readFileSync(process.argv[hi + 1], "utf8") : readHtml();
const IT_NAMES = [...new Set([...html.matchAll(/^const (IT_\w+)\s*=/gm)].map(m => m[1]))];
const H = pickConsts(html,
  ["NINF", "MAPS", "MAP_ALIAS", "RUB_ID", /^IT_/, "COND_CLIMB", "EXIT_COND", "EXTRA_EXTRACTS", "EXIT_SWITCH", "TRANSIT_COND", "EXTRACT_FLOOR_OVERRIDE"],
  ["NINF", "PINF", "MAPS", "MAP_ALIAS", "RUB_ID", "EUR_ID", "EXIT_COND", "EXTRA_EXTRACTS", "EXIT_SWITCH", "TRANSIT_COND", "EXTRACT_FLOOR_OVERRIDE", ...IT_NAMES]);
const canon = m => m ? (H.MAP_ALIAS[m] || m) : m;
const OUR = new Set(H.MAPS.map(m => m.n));

// 結果: 同じ文が PvP・PvE の両方で出たら 1 行にまとめる
const R = { must: new Map(), check: new Map(), info: new Map() };
const add = (lv, msg, mode = "") => { const s = R[lv].get(msg) || new Set(); if(mode) s.add(mode); R[lv].set(msg, s); };
const MODE_JA = { pvp: "PvP", pve: "PvE" };

// ゲームの地図の外にある既知のもの（毎回「使っていない」と出さないため）
// customs の 4th Floor は 3F にまとめている。reserve の建物の 2〜5F は SVG の層が無いので地上扱い（apply-ex で決めたこと）
const FOLDED = { "customs|4th Floor": "3F" };
// To the Light（Mechanic → Lightkeeper）。tarkov.dev に入ったら、お知らせ news1116b の案内を外す
const TTL = /^To the Light|^(Trust but Verify|The Other Side|Fallen Bird|Dangerous Ambitions|Someone Called|False Call)$/i;

const r1 = v => Math.round(v);
const posKey = p => p ? `${r1(p.x)},${r1(p.y)},${r1(p.z)}` : "";
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const pinSig = t => t.objectives.map(o => o.id + ":" + [
  ...o.zones.map(z => z.map.normalizedName + "@" + posKey(z.position)),
  ...o.possibleLocations.flatMap(pl => pl.positions.map(p => pl.map.normalizedName + "@" + posKey(p))),
].sort().join(";")).sort().join("|");
const list = (a, n = 12) => a.length <= n ? a.join("、") : a.slice(0, n).join("、") + ` ほか ${a.length - n} 件`;

async function checkMode(mode){
  const M = MODE_JA[mode];
  const cur = await fetchMode(mode, html);
  const snapFile = path.join(root, mode === "pve" ? "data-snapshot-pve.js" : "data-snapshot.js");
  const snap = loadSnapshot(snapFile);
  const old = snap && snap.data;
  console.log(`${M}: タスク ${cur.tasks.length}・マップ ${cur.maps.length}（比べる相手: スナップショット ${snap ? snap.generated.slice(0, 10) : "なし"}）`);

  // ---------- タスクの増減・変化 ----------
  if(old){
    const ob = new Map(old.tasks.map(t => [t.id, t])), cb = new Map(cur.tasks.map(t => [t.id, t]));
    const added = cur.tasks.filter(t => !ob.has(t.id)), removed = old.tasks.filter(t => !cb.has(t.id));
    const fmt = t => `${t.nameEn}（${t.trader.name}${t.map && t.map.normalizedName ? "・" + t.map.normalizedName : ""}）`;
    if(added.length) add("check", `新しいタスク ${added.length} 件: ${list(added.map(fmt))} → タスクのページは gen-tasks で自動で増える。位置のある目標が地図に出るか見る`, M);
    if(removed.length) add("check", `消えたタスク ${removed.length} 件: ${list(removed.map(fmt))} → ページは gen-tasks で自動で消える。お気に入り・進み具合の保存は id なので影響なし`, M);
    const renamed = [], moved = [], traderCh = [];
    for(const t of cur.tasks){
      const o = ob.get(t.id); if(!o) continue;
      if(o.nameEn !== t.nameEn) renamed.push(`${o.nameEn} → ${t.nameEn}`);
      if(o.trader.name !== t.trader.name) traderCh.push(`${t.nameEn}（${o.trader.name} → ${t.trader.name}）`);
      if(pinSig(o) !== pinSig(t)) moved.push(t.nameEn);
    }
    if(renamed.length) add("check", `名前が変わったタスク: ${list(renamed)}`, M);
    if(traderCh.length) add("check", `トレーダーが変わったタスク: ${list(traderCh)}`, M);
    if(moved.length) add("info", `目標の印（位置）が変わったタスク ${moved.length} 件: ${list(moved)}`, M);
  }else add("check", `スナップショット（${path.basename(snapFile)}）が無いので、増減は比べられません`, M);

  // ---------- マップの増減・脱出口・乗り継ぎ・スイッチ ----------
  if(old){
    const om = new Map(old.maps.map(m => [m.normalizedName, m]));
    for(const m of cur.maps){
      const o = om.get(m.normalizedName);
      if(!o){ add("check", `新しいマップがデータに入った: ${m.normalizedName}（脱出口 ${m.extracts.length}）`, M); continue; }
      const oe = new Map(o.extracts.map(e => [e.key, e])), ce = new Map(m.extracts.map(e => [e.key, e]));
      const ad = [...ce.keys()].filter(k => !oe.has(k)), rm = [...oe.keys()].filter(k => !ce.has(k));
      const mv = [...ce.keys()].filter(k => oe.has(k) && dist(oe.get(k).position, ce.get(k).position) > 3);
      if(ad.length) add("check", `${m.normalizedName}: 新しい脱出口 ${list(ad)} → 地下などの階・条件（鍵・電源など）を攻略サイトで確かめる`, M);
      if(rm.length) add("check", `${m.normalizedName}: 消えた脱出口 ${list(rm)}`, M);
      if(mv.length) add("info", `${m.normalizedName}: 場所が 3m 以上動いた脱出口 ${list(mv)}`, M);
      // 乗り継ぎは説明文で見分ける（10/13 より前のスナップショットには行き先 dest が無いので、両方にあるときだけ行き先を比べる）
      const ot = new Map(o.transits.map(x => [x.description, x])), ct = new Map(m.transits.map(x => [x.description, x]));
      const tad = [...ct.keys()].filter(k => !ot.has(k)), trm = [...ot.keys()].filter(k => !ct.has(k));
      const tdest = [...ct.keys()].filter(k => ot.has(k) && ot.get(k).dest && ct.get(k).dest && ot.get(k).dest !== ct.get(k).dest).map(k => `${k}（${ot.get(k).dest} → ${ct.get(k).dest}）`);
      if(tad.length) add("check", `${m.normalizedName}: 新しい乗り継ぎ ${list(tad)} → 条件（鍵・道具など）を確かめ、要るなら TRANSIT_COND に足す`, M);
      if(trm.length) add("check", `${m.normalizedName}: 消えた乗り継ぎ ${list(trm)}`, M);
      if(tdest.length) add("check", `${m.normalizedName}: 行き先が変わった乗り継ぎ ${list(tdest)}`, M);
      const os = new Set(o.switches.map(s => s.name)), cs = new Set(m.switches.map(s => s.name));
      const sad = [...cs].filter(k => !os.has(k));
      if(sad.length) add("info", `${m.normalizedName}: 新しいスイッチ ${list(sad)}`, M);
    }
    for(const o of old.maps) if(!cur.maps.some(m => m.normalizedName === o.normalizedName)) add("check", `マップがデータから消えた: ${o.normalizedName}`, M);
  }

  // ---------- 手で持っている表が、今のデータでも当てはまるか ----------
  const mapsOf = mn => cur.maps.filter(m => canon(m.normalizedName) === mn);
  const hasExit = (mn, key) => mapsOf(mn).some(m => m.extracts.some(e => e.key === key)) || (H.EXTRA_EXTRACTS[mn] || []).some(e => e.key === key);
  for(const k of Object.keys(H.EXIT_COND)){
    const [mn, nm] = k.split("|");
    if(!hasExit(mn, nm)) add("must", `脱出の条件 EXIT_COND の「${k}」: その脱出口がデータに無い（名前が変わった？）`, M);
  }
  for(const [mn, arr] of Object.entries(H.EXTRA_EXTRACTS)) for(const e of arr)
    if(mapsOf(mn).some(m => m.extracts.some(x => x.key === e.key))) add("check", `手で足している脱出口「${mn}|${e.key}」がデータに入った → EXTRA_EXTRACTS から消せる（位置を見比べてから）`, M);
  for(const [k, r] of Object.entries(H.EXIT_SWITCH)){
    const [mn, nm] = k.split("|");
    if(!hasExit(mn, nm)) add("must", `電源 EXIT_SWITCH の「${k}」: その脱出口がデータに無い`, M);
    if(!mapsOf(mn).some(m => m.switches.some(s => s.position && (s.id === r.id || s.name === r.en)))) add("must", `電源 EXIT_SWITCH の「${k}」: スイッチ（${r.en}）がデータに無い（id か名前が変わった？）`, M);
  }
  for(const [mn, ov] of Object.entries(H.EXTRACT_FLOOR_OVERRIDE)) for(const nm of Object.keys(ov))
    if(!hasExit(mn, nm)) add("must", `脱出口の階 EXTRACT_FLOOR_OVERRIDE の「${mn}|${nm}」: その脱出口がデータに無い`, M);
  for(const k of Object.keys(H.TRANSIT_COND)){
    const [from, to] = k.split("|");
    if(!mapsOf(from).some(m => m.transits.some(x => x.dest === to))) add("must", `乗り継ぎの条件 TRANSIT_COND の「${k}」: その乗り継ぎがデータに無い`, M);
  }

  // ---------- ツールに無いマップの目標（Icebreaker などを足す目安） ----------
  const off = {};
  for(const t of cur.tasks) for(const o of t.objectives){
    const ms = new Set([...o.zones.map(z => z.map.normalizedName), ...o.possibleLocations.filter(pl => pl.positions.length).map(pl => pl.map.normalizedName)].map(canon));
    for(const mn of ms) if(mn && !OUR.has(mn)){ const x = off[mn] || (off[mn] = { tasks: new Set(), objs: 0 }); x.tasks.add(t.nameEn); x.objs++; }
  }
  for(const [mn, x] of Object.entries(off)){
    const what = `位置のある目標 ${x.objs} 個（タスク ${x.tasks.size} 件: ${list([...x.tasks], 6)}）`;
    if(ALT[mn] && OUR.has(ALT[mn])) add("check", `${mn} は tarkov.dev では ${ALT[mn]} の別版のマップ。${what} → MAP_ALIAS に「${mn}: ${ALT[mn]}」を足せば ${ALT[mn]} の地図に出る`, M);
    else add(x.objs >= 5 ? "check" : "info", `ツールに無いマップ ${mn}: ${what}${x.objs >= 5 ? " → マップの追加を考える" : ""}`, M);
  }

  // ---------- To the Light ----------
  const ttl = cur.tasks.filter(t => t.trader.name === "Mechanic" && TTL.test(t.nameEn));
  if(ttl.length) add("check", `To the Light のタスクがデータに入った（${list(ttl.map(t => t.nameEn))}）→ お知らせ news1116b の「表示できません」を外し、入ったことをお知らせする`, M);

  // ---------- ストーリー章（スナップショットにしか無い）がまだ今のタスクと合っているか ----------
  const story = old && old.story;
  if(!story) add("check", "スナップショットにストーリー章が無い（作り直すときに消えた？）", M);
  else{
    const ids = new Set(cur.tasks.map(t => t.id));
    const gone = Object.keys(story.taskReqs || {}).filter(id => !ids.has(id));
    if(gone.length) add("info", `ストーリー章の条件に出てくるタスクのうち ${gone.length} 件が今のデータに無い（表示には影響なし）`, M);
  }
  return cur;
}

// ---------- 条件に出てくるアイテムの id ----------
async function checkItems(){
  const r = await fetch("https://json.tarkov.dev/regular/items_en", { headers: { Accept: "application/json" } });
  if(!r.ok){ add("check", `アイテム名のデータが取れない（HTTP ${r.status}）。アイテムの点検は飛ばした`); return; }
  const ien = (await r.json()).data || {};
  const items = IT_NAMES.map(n => [n, H[n]]).concat([["RUB_ID", { id: H.RUB_ID, name: "Roubles" }], ["EUR_ID", { id: H.EUR_ID, name: "Euros" }]]);
  for(const [n, it] of items){
    const nm = ien[it.id + " Name"];
    if(!nm) add("must", `${n}（${it.name}）: アイテム id ${it.id} がデータに無い`);
    else if(it.name !== nm && !/^(RUB|EUR)_ID$/.test(n)) add("check", `${n}: ツールの名前「${it.name}」とデータの名前「${nm}」が違う（表示はデータの名前が出ない所もある）`);
  }
}

// ---------- tarkov.dev の地図設定（maps.json）。ALT = 別版のマップ（night-factory など）→ 本来のマップ ----------
const TD = {}, ALT = {};
let mapsJsonErr = "";
{
  const r = await fetch("https://raw.githubusercontent.com/the-hideout/tarkov-dev/main/src/data/maps.json");
  if(!r.ok) mapsJsonErr = `HTTP ${r.status}`;
  else{
    const MJ = await r.json();
    for(const g of (Array.isArray(MJ) ? MJ : Object.values(MJ))) for(const m of (g.maps || [g])) if(m.projection === "interactive"){
      const key = m.key || g.normalizedName;
      TD[key] = m;
      for(const a of (m.altMaps || [])) ALT[a] = key;
    }
  }
}

// ---------- 地図の位置合わせと階の範囲（tarkov.dev の maps.json と同じか） ----------
async function checkMapArt(){
  if(mapsJsonErr){ add("check", `tarkov.dev の maps.json が取れない（${mapsJsonErr}）。地図の点検は飛ばした`); return; }
  for(const [a, key] of Object.entries(ALT)) if(OUR.has(key) && canon(a) !== key) add("info", `${a} は tarkov.dev では ${key} の別版だが、ツールの MAP_ALIAS に無い（その上に位置のある目標が無いうちは影響なし）`);
  const J = v => JSON.stringify(v);
  const num = v => v <= -1000 ? H.NINF : v >= 1000 ? H.PINF : v;
  for(const m of H.MAPS){
    const td = TD[m.n];
    if(!td){ add("must", `${m.n}: tarkov.dev の地図設定に無い（名前が変わった？）`); continue; }
    if(m.n === "lighthouse"){ add("info", "lighthouse: 独自の地図の絵を使っているので、位置合わせは比べていない"); }
    else{
      const cmp = [["t", "transform"], ["r", "coordinateRotation"], ["b", "bounds"], ["sb", "svgBounds"], ["svg", "svgPath"], ["lyr", "svgLayer"], ["tile", "tilePath"]];
      for(const [ours, theirs] of cmp){
        if(m[ours] === undefined && td[theirs] === undefined) continue;
        if(ours === "tile" && m.tile === undefined) continue;          // ツールが SVG だけで描くマップ
        if((ours === "svg" || ours === "lyr") && m.svg === undefined) continue;
        if(J(m[ours]) !== J(td[theirs])) add("must", `${m.n}: 地図の ${theirs} が違う（ツール ${J(m[ours])} / tarkov.dev ${J(td[theirs])}）→ 印と絵がずれる`);
      }
      if(m.tile && J(m.ts || 256) !== J(td.tileSize || 256)) add("must", `${m.n}: タイルの大きさ tileSize が違う（ツール ${m.ts || 256} / tarkov.dev ${td.tileSize || 256}）→ 地図の大きさがずれる`);
    }
    // 階: ツールの各階の ex が、tarkov.dev の layers[].extents と同じか
    const layers = td.layers || [], used = new Set();
    for(const f of (m.floors || [])){
      if(f.base) continue;
      const own = layers.filter(l => (f.svg && l.svgLayer === f.svg) || (f.tile && l.tilePath === f.tile));
      const extra = layers.filter(l => FOLDED[m.n + "|" + l.name] === f.jp);
      if(!own.length){ add("must", `${m.n} の ${f.jp}: tarkov.dev に同じ絵の階が無い（${f.svg || f.tile}）`); continue; }
      own.concat(extra).forEach(l => used.add(l.name));
      const want = own.concat(extra).flatMap(l => l.extents || []).map(e => Object.assign({ h: [num(e.height[0]), num(e.height[1])] }, e.bounds ? { bx: e.bounds } : {}));
      if(J(want) !== J(f.ex)) add("must", `${m.n} の ${f.jp}: 階の範囲（高さ・建物の範囲）が tarkov.dev と違う → apply-ex と同じやり方で ex を写し直す`);
    }
    const unused = layers.filter(l => !used.has(l.name)).map(l => l.name);
    const known = m.n === "reserve" ? unused.filter(n => !layers.find(l => l.name === n).svgLayer) : [];   // Reserve の建物の階（タイルだけ）
    const newUnused = unused.filter(n => !known.includes(n));
    if(newUnused.length) add("check", `${m.n}: tarkov.dev にあってツールに無い階 ${list(newUnused)} → 足すか、どこかの階にまとめる`);
  }
  for(const k of Object.keys(TD)) if(!OUR.has(k)) add("info", `tarkov.dev には地図があるが、ツールに無いマップ: ${k}`);
}

const t0 = Date.now();
await checkMode("pvp");
await checkMode("pve");
await checkItems();
await checkMapArt();

const stamp = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 16).replace(/[-:]/g, "").replace("T", "-");
const out = [`# パッチの点検（${stamp.slice(0, 8)} ${stamp.slice(9, 11)}:${stamp.slice(11)} JST）`, ""];
const sect = (lv, title) => {
  out.push(`## ${title}（${R[lv].size} 件）`);
  if(!R[lv].size) out.push("- なし");
  for(const [msg, modes] of R[lv]) out.push(`- ${modes.size ? "［" + [...modes].join("・") + "］" : ""}${msg}`);
  out.push("");
};
sect("must", "直す必要あり");
sect("check", "確かめること");
sect("info", "参考");
out.push(`（${((Date.now() - t0) / 1000).toFixed(0)} 秒）`);
const text = out.join("\n");
console.log("\n" + text);
const dir = path.join(root, "checks");
if(hi < 0 && fs.existsSync(dir)){ const f = path.join(dir, `patch-report-${stamp}.md`); fs.writeFileSync(f, text + "\n", "utf8"); console.log("保存しました:", f); }
process.exit(R.must.size ? 1 : 0);
