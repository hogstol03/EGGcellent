self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("static-cache").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/styles.css",
                "/client.js",
                "/manifest.json",
                "/icons/appIconSmall.png",
                "/icons/appIconBig.png",
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
