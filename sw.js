const CACHE_NAME = 'nexus-cache-v1';
const OFFLINE_URL = '/';
const ASSETS_TO_CACHE = [
  OFFLINE_URL,
  '/index.html',
  '/styles.css',
  '/app.js',
  '/ICON.png'
];

// install - cache shell
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE)).catch(()=>{})
  );
});

// activate - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// fetch - network-first for navigation, cache-first for assets
self.addEventListener('fetch', (event) => {
  try {
    const req = event.request;
    // navigation requests: try network then fallback to cache
    if (req.mode === 'navigate' || (req.method === 'GET' && req.headers.get('accept')?.includes('text/html'))) {
      event.respondWith(
        fetch(req).then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          return res;
        }).catch(() => caches.match(OFFLINE_URL))
      );
      return;
    }

    // for same-origin assets, try cache first then network
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(networkRes => {
          // only cache GET requests from same origin
          if (req.method === 'GET' && new URL(req.url).origin === location.origin) {
            const copy = networkRes.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          }
          return networkRes;
        }).catch(() => {
          // final fallback to cache for images/icons
          if (req.destination === 'image') {
            return caches.match('/ICON.png');
          }
        });
      })
    );
  } catch (e) {
    // safety: do nothing
  }
});

// optional: basic message handler for skipWaiting
self.addEventListener('message', (evt) => {
  if (evt.data && evt.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

