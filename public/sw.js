const CACHE_NAME = 'stock-yangu-v1';
const ASSETS = [
  '/stock-yangu/',
  '/stock-yangu/index.html',
  '/stock-yangu/manifest.json',
  '/stock-yangu/favicon.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
