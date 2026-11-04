// IndexNow で Bing などの検索エンジンに、サイトのページ一覧(sitemap.xml)をまとめて知らせる。
// 使い方: 公開してサイトに反映されたあとで node tools/indexnow.mjs   ※ 鍵ファイル c8ca00885022cc45b9a11a147859ea66.txt をサイトの一番上に置いておくこと
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const KEY = "c8ca00885022cc45b9a11a147859ea66";
const HOST = "tarkovtaskmap.github.io";
const urls = [...fs.readFileSync(path.join(root, "sitemap.xml"), "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
// 鍵ファイルが公開サイトで読めるか先に確かめる（読めないと送信が無効になる）
const k = await fetch(`https://${HOST}/${KEY}.txt`, { cache: "no-store" });
if (!k.ok || (await k.text()).trim() !== KEY) { console.error("鍵ファイルがまだサイトにありません（公開後に実行してください）"); process.exit(1); }
const r = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow に ${urls.length} URL を送信: HTTP ${r.status} ${r.statusText}`, (await r.text()).slice(0, 200));
