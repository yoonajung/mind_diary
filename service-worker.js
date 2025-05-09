
const CACHE_NAME = 'maeumilgi-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/diary.html',
  '/gratitude.html',
  '/compliment.html',
  '/reading.html',
  '/routines.html',
  '/reminder.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
