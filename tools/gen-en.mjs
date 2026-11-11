// 言語別ページ en/ de/ es/ pt/ pl/ ru/ tr/ zh/ の index.html を index.html から生成する（検索でそれぞれの言語の人に見つけてもらうため）。
// 題・説明文・URL は tools/page-langs.mjs にまとめてある。
// 使い方: node tools/gen-en.mjs   ※ index.html を変えたら公開前に必ず実行する（en/ などを直接編集しない）
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PAGE_LANGS, SITE, pageUrl } from "./page-langs.mjs";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.join(root, "index.html"), "utf8");

// index.html に、すべての言語別ページへの hreflang があるか確かめる（無いと検索エンジンが別々のページだと思う）
for (const L of PAGE_LANGS) {
  const line = `<link rel="alternate" hreflang="${L.hreflang}" href="${pageUrl(L)}" />`;
  if (!src.includes(line)) throw new Error("index.html に hreflang がありません: " + line);
}

// 同梱ファイル（ページが /xx/ にあるので、サイトの一番上から読む）
const ASSETS = ["data-snapshot.js", "data-snapshot-pve.js", "ja-supplement.js", "lang-zh.js", "lang-ru.js", "lang-pl.js", "lang-pt.js", "lang-de.js", "lang-es.js", "lang-tr.js", "lighthouse-map.jpg"];
const esc = s => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const done = [];
let count = 0;
for (const L of PAGE_LANGS.filter(x => x.code !== "ja")) {
  let s = src, n = 0;
  const URL = pageUrl(L);
  const rep = (re, to) => { const before = s; s = s.replace(re, to); if (s === before) throw new Error(`${L.code}: not found: ${re}`); n++; };
  rep(/<html lang="ja">/, `<html lang="${L.hreflang}">`);
  rep(/<title>[^<]*<\/title>/, `<title>${esc(L.title)}</title>`);
  rep(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(L.desc)}" />`);
  rep(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${URL}" />`);
  rep(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(L.ogTitle)}" />`);
  rep(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(L.ogDesc)}" />`);
  rep(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${URL}" />`);
  rep(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(L.ogTitle)}" />`);
  rep(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(L.ogDesc)}" />`);
  rep(/"url": "https:\/\/tarkovtaskmap\.github\.io\/",/, `"url": "${URL}",`);
  rep(/"description": "Escape from Tarkov のタスク[^"]*",/, `"description": ${JSON.stringify(L.desc)},`);
  // 初回はこのページの言語で開く（言語を選んだことがある人はその言語のまま）
  rep(/(<link rel="alternate" hreflang="x-default"[^>]*>)(\r?\n)/, `$1$2<script>window.__PAGE_LANG__ = "${L.code}";</script>$2`);
  for (const f of ASSETS) rep(new RegExp(`(["'])${f.replace(".", "\\.")}\\1`, "g"), `$1/${f}$1`);
  s = s.replace("<!DOCTYPE html>", "<!DOCTYPE html>\n<!-- 自動生成: tools/gen-en.mjs が index.html から作る。このファイルは直接編集しない -->");
  fs.mkdirSync(path.join(root, L.dir), { recursive: true });
  fs.writeFileSync(path.join(root, L.dir, "index.html"), s);
  done.push(L.dir + "/");
  count = n;
}
console.log(`言語別ページを生成しました: ${done.join(" ")}（各ページ 置換 ${count} か所）`);

// アプリとして使うための manifest（ページごとに、開く場所と言語だけ変える。id が同じなので、どのページから入れても同じアプリ）
if (!src.includes('<link rel="manifest" href="manifest.webmanifest" />')) throw new Error("index.html に manifest の link がありません");
for (const L of PAGE_LANGS) {
  const m = {
    id: "/", name: "Tarkov Task Map", short_name: "Task Map", description: L.ogTitle, lang: L.hreflang,
    start_url: "/" + (L.dir ? L.dir + "/" : ""), scope: "/", display: "standalone",
    background_color: "#1b1b1b", theme_color: "#1b1b1b",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
  fs.writeFileSync(path.join(root, L.dir, "manifest.webmanifest"), JSON.stringify(m, null, 2) + "\n");
}
console.log(`アプリ用の manifest を生成しました（${PAGE_LANGS.length} 言語）`);
