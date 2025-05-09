
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mind-diary-cache-v1').then(function(cache) {
      return cache.addAll([
        '/home.html',
        '/login.html',
        '/diary.html',
        '/gratitude.html',
        '/compliment.html',
        '/reading.html',
        '/routines.html',
        '/reminder.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
