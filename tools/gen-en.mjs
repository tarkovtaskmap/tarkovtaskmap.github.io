// 英語ページ en/index.html を index.html から生成する（検索で英語の人に見つけてもらうため）。
// 使い方: node tools/gen-en.mjs   ※ index.html を変えたら公開前に必ず実行する（en/ を直接編集しない）
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
let s = fs.readFileSync(path.join(root, "index.html"), "utf8");

const SITE = "https://tarkovtaskmap.github.io/";
const EN_URL = SITE + "en/";
const TITLE = "Tarkov Task Map — Escape from Tarkov task (quest) objectives & extracts on the map";
const DESC = "Free Escape from Tarkov map tool: pick your tasks (quests) before a raid and see their objectives and extracts on the map. PvP / PvE / Seasonal, no install.";
const OG_TITLE = "Tarkov Task Map — task objectives & extracts map";
const OG_DESC = "Pick your tasks before a raid and see objectives and extracts on the map. PvP / PvE / Seasonal, free, no install.";

let n = 0;
const rep = (re, to) => { const before = s; s = s.replace(re, to); if (s === before) throw new Error("not found: " + re); n++; };
rep(/<html lang="ja">/, '<html lang="en">');
rep(/<title>[^<]*<\/title>/, `<title>${TITLE}</title>`);
rep(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${DESC}" />`);
rep(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${EN_URL}" />`);
rep(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${OG_TITLE}" />`);
rep(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${OG_DESC}" />`);
rep(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${EN_URL}" />`);
rep(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${OG_TITLE}" />`);
rep(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${OG_DESC}" />`);
rep(/"url": "https:\/\/tarkovtaskmap\.github\.io\/",/, `"url": "${EN_URL}",`);
rep(/"description": "Escape from Tarkov のタスク[^"]*",/, `"description": "${DESC}",`);
// 初回は英語で開く（言語を選んだことがある人はその言語のまま）
rep(/(<link rel="alternate" hreflang="x-default"[^>]*>)(\r?\n)/, `$1$2<script>window.__PAGE_LANG__ = "en";</script>$2`);
// ページが /en/ にあるので、同梱ファイルはサイトの一番上から読む
for (const f of ["data-snapshot.js", "data-snapshot-pve.js", "ja-supplement.js", "lang-zh.js", "lang-ru.js", "lighthouse-map.jpg"]) {
  rep(new RegExp(`(["'])${f.replace(".", "\\.")}\\1`, "g"), `$1/${f}$1`);
}
s = s.replace("<!DOCTYPE html>", "<!DOCTYPE html>\n<!-- 自動生成: tools/gen-en.mjs が index.html から作る。このファイルは直接編集しない -->");

fs.mkdirSync(path.join(root, "en"), { recursive: true });
fs.writeFileSync(path.join(root, "en", "index.html"), s);
console.log("en/index.html を生成しました（置換 " + n + " か所）");
