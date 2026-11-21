// index.html の fetchData() そのものを Node で実行してスナップショットを生成する(再実装しないので常に一致)
// 使い方(プロジェクトのフォルダで): node tools/gen-snapshot.mjs   → data-snapshot.js(PvP/Seasonal用) と data-snapshot-pve.js(PvE用) を両方作り直す
// ストーリー章の元データは 2026-10 から取得できない（OVERLAY_URL が空）。取れなかったときは、今のスナップショットのストーリーを引き継ぐ
import fs from "fs"; import path from "path";
import { root, fetchMode, loadSnapshot } from "./fetch-lib.mjs";
async function gen(mode, out){
  const data = await fetchMode(mode);
  if(!data.story){
    const prev = loadSnapshot(out);
    const story = prev && prev.data && prev.data.story;
    if(story){ data.story = story; console.log(mode, "ストーリー章は取得できないので、今のスナップショットから引き継ぎました（章", story.chapters.length + "）"); }
    else console.warn(mode, "注意: ストーリー章がありません（前のスナップショットにも無い）");
  }
  fs.writeFileSync(out, (mode === "pve" ? "window.__EFT_SNAPSHOT_PVE__ = " : "window.__EFT_SNAPSHOT__ = ") + JSON.stringify({ generated: new Date().toISOString(), data }) + ";\n", "utf8");
  console.log(mode, "tasks", data.tasks.length, "maps", data.maps.length, "->", out, (fs.statSync(out).size / 1e6).toFixed(2) + "MB");
}
await gen("pvp", path.join(root, "data-snapshot.js"));
await gen("pve", path.join(root, "data-snapshot-pve.js"));
