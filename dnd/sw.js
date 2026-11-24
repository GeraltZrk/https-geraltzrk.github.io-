// Offline support: stale-while-revalidate for everything under this folder.
const CACHE = 'anbdnd-v1';
const CORE = ['./', './index.html', './css/main.css', './js/app.js', './manifest.webmanifest'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    const cached = await cache.match(req);
    const fresh = fetch(req).then((res) => { if (res && res.status === 200) cache.put(req, res.clone()); return res; }).catch(() => cached);
    return cached || fresh;
  }));
});
