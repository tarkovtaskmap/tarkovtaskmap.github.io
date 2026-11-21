// index.html の中身を Node で使うための共通部品（gen-snapshot.mjs・patch-check.mjs で使う）
// - fetchMode(): ツールの fetchData() をそのまま動かして、今の tarkov.dev のデータを取る（再実装しないので常にツールと一致）
// - pickConsts(): 手で持っている表（MAPS・EXIT_COND など）を index.html から取り出して読む
// - loadSnapshot(): 同梱スナップショット（data-snapshot*.js）を読む
import fs from "fs"; import vm from "vm"; import path from "path"; import { fileURLToPath } from "url";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const readHtml = () => fs.readFileSync(path.join(root, "index.html"), "utf8");
const inlineJs = html => { const s = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)]; return s[s.length - 1][1]; };

export async function fetchMode(mode, html = readHtml()){
  const lines = inlineJs(html).split("\n");
  const endIdx = lines.findIndex(l => /return \{ maps, tasks(, story)?(, mapNames[^}]*)? \};/.test(l));
  const a = lines.findIndex(l => /^let LANG = /.test(l));
  const t0 = lines.findIndex(l => /^function applyStaticI18n/.test(l));
  const c0 = lines.findIndex(l => /^const canonMap = /.test(l));
  const j0 = lines.findIndex(l => /^const JD_BASE/.test(l));
  const ma = lines.findIndex(l => /MAP_ALIAS\s*=/.test(l));
  if([endIdx, a, t0, c0, j0, ma].some(i => i < 0)) throw new Error("index.html の fetchData まわりの形が変わっています（fetch-lib.mjs を直してください）");
  // 1) LANG/MODE/STR/T  2) MAP_ALIAS と canonMap  3) JD_BASE 〜 fetchData の終わり
  let src = lines.slice(a, t0).join("\n") + "\n";
  let k = ma, depth = 0; const buf = [];
  for(; k < lines.length; k++){ buf.push(lines[k]); for(const ch of lines[k]){ if(ch === "{") depth++; else if(ch === "}") depth--; } if(depth === 0 && /;\s*(\/\/.*)?$/.test(lines[k])) break; }
  src += buf.join("\n") + "\n" + lines[c0] + "\n";
  src += lines.slice(j0, endIdx + 2).join("\n") + "\n";
  src += "\nthis.__fetchData = fetchData;";
  // LANG を決める部分が使うものを用意する（配信用の表示 OBS ではない・ブラウザは日本語）。11/14 から OBS が要る
  const ctx = { localStorage: { getItem: key => key === "eft_qm_mode" ? mode : (key === "eft_qm_lang" ? "ja" : null), setItem(){} }, fetch, console, setTimeout,
    OBS: false, OBSQ: new URLSearchParams(""), navigator: { language: "ja", languages: ["ja"] }, window: {}, location: { search: "", hash: "", pathname: "/" } };
  vm.createContext(ctx);
  vm.runInContext(src, ctx);
  return ctx.__fetchData();
}

export function loadSnapshot(file){
  if(!fs.existsSync(file)) return null;
  const s = fs.readFileSync(file, "utf8");
  return JSON.parse(s.slice(s.indexOf("{"), s.lastIndexOf("}") + 1));
}

// 「const 名前 = …;」の文を丸ごと取り出して読む。names は名前か正規表現。exportNames は取り出したい変数名
// （const NINF = -1e9, PINF = 1e9; のように 1 つの文で複数を決めているものがあるので、別に渡す）
export function pickConsts(html, names, exportNames){
  const lines = inlineJs(html).split("\n");
  const want = l => { const m = l.match(/^const (\w+)/); return m && names.some(n => n instanceof RegExp ? n.test(m[1]) : n === m[1]); };
  let src = "";
  for(let i = 0; i < lines.length; i++){
    if(!want(lines[i])) continue;
    // 文の終わり（深さ 0 の ;）まで読む。文字列とコメントの中の括弧は数えない
    let depth = 0, done = false;
    for(let k = i; k < lines.length && !done; k++){
      const L = lines[k]; let q = null;
      for(let c = 0; c < L.length; c++){
        const ch = L[c];
        if(q){ if(ch === "\\") c++; else if(ch === q) q = null; continue; }
        if(ch === "/" && L[c + 1] === "/") break;
        if(ch === '"' || ch === "'" || ch === "`"){ q = ch; continue; }
        if("{[(".includes(ch)) depth++;
        else if("}])".includes(ch)) depth--;
        else if(ch === ";" && depth === 0){ done = true; break; }
      }
      src += L + "\n"; i = k;
    }
  }
  src += `\nthis.__out = { ${exportNames.join(", ")} };`;
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(src, ctx);
  return ctx.__out;
}
