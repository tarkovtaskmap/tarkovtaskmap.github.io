// Tarkov Task Map のサービスワーカー（ツールを「アプリとして使う」ためのもの）。
// いつもネットを先に見るので、公開した新しい版がすぐ届く。ネットにつながらないときだけ、前に開いたこのサイトのページやファイルを出す。
// tarkov.dev のデータや地図画像、Leaflet など、ほかのサイトのファイルには手を出さない（ブラウザに任せる）。
const CACHE = "ttm-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok && res.type === "basic") { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); }
      return res;
    }).catch(() => caches.match(req).then(r => r || (req.mode === "navigate" ? caches.match("/") : null)).then(r => r || Response.error()))
  );
});
