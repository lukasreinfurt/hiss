self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('hiss').then(function(cache) {
        return cache.addAll([
          'index.html',
          'manifest.webmanifest',
          'serviceworker.js',
          'assets/css/app.css',
          'assets/images/icon-16x16.png',
          'assets/images/icon-192x192.png',
          'assets/images/icon-512x512.png',
          'assets/js/app.js',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  