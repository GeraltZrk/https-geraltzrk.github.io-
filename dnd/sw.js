// Offline support.
// Code and pages (html, js, css, json, manifest) are fetched from the network first so an update
// never mixes old and new modules; the cached copy is used only when offline.
// Pictures and fonts rarely change, so they come from the cache first and refresh in the background.
const CACHE = 'anbdnd-v2';
const CORE = ['./', './index.html', './css/main.css', './js/app.js', './manifest.webmanifest'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

const isCode = (url) => /\.(html|js|mjs|css|json|webmanifest)$/.test(url.pathname) || url.pathname.endsWith('/');

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (cache) => {
    const save = (res) => { if (res && res.status === 200) cache.put(req, res.clone()); return res; };
    if (isCode(url)) {
      try { return save(await fetch(req)); } catch { return (await cache.match(req)) || Response.error(); }
    }
    const cached = await cache.match(req);
    const fresh = fetch(req).then(save).catch(() => cached);
    return cached || fresh;
  }));
});
