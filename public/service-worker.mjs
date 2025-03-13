self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('egg-timer-cache').then(cache => {
            const urlsToCache = [
                '/index.html',
                '/styles.css',
                '/app.mjs',
                '/modules/timer.mjs',
                '/modules/api.mjs',
                '/modules/ui.mjs',
                '/manifest.json'
            ];

            console.log('Caching these URLs:', urlsToCache);
            return cache.addAll(urlsToCache)
                .then(() => {
                    console.log('All files cached successfully');
                })
                .catch((error) => {
                    console.error('Error caching files:', error);
                });
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).catch(() => {
                return caches.match('/offline.html');
            });
        })
    );
});
