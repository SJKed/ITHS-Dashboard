/* eslint-disable no-restricted-globals */

const statics = self.__WB_MANIFEST;

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open("benis").then((cache) => {
      console.log(statics);
      cache.add("/");
      return cache.addAll(statics.map((url) => url.url));
    })
  );
});


self.addEventListener("fetch", (event) => {
  if (!(event.request.url.indexOf('http') === 0)) return;

  event.respondWith(
    caches.open("benis").then((cache) => {
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