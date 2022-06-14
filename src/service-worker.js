/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open("sötsursås").then((cache) => {
      console.log(statics);
      return cache.addAll(statics.map((url) => url.url));
    })
  );
});


self.addEventListener("fetch", (event) => {
  if (!(event.request.url.indexOf('http') === 0)) return;

  event.respondWith(
    caches.open("sötsursås").then((cache) => {
      return cache.match(event.request).then((response) => {
        if (response) {
          return response;
        } else {
          const pellesvanslös = fetch(event.request);
          pellesvanslös.then((response) => {
            cache.put(event.request, response.clone());
          });
          return pellesvanslös;
        }
      });
    })
  );
});