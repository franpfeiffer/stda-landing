const CACHE_NAME = 'saber-te-da-aire-v1';

const precacheResources = [
  '/',
  '/index.html',
  '/src/main.jsx',
  '/src/index.css',
  '/assets/wave-pattern.svg',
];

const routeResources = [
  '/asma',
  '/epoc',
  '/especialistas',
  '/conoce-abc',
];

const criticalImages = [
  'https://ext.same-assets.com/765921102/4265005190.png',
  'https://ext.same-assets.com/765921102/2748376113.png',
  'https://stda.com.ar/wp-content/uploads/2024/05/Heder-Guada.png',
  'https://stda.com.ar/wp-content/uploads/2024/05/Background-Header-Epoc.jpg',
  'https://stda.com.ar/wp-content/uploads/2024/05/Background-Especialistas-1.jpg',
];

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(precacheResources)
          .then(() => {
            return cache.addAll(criticalImages);
          });
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => {
          return cacheName !== CACHE_NAME;
        }).map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  if (
    event.request.url.includes('analytics') ||
    event.request.url.includes('api.') ||
    event.request.url.includes('socket.') ||
    event.request.method !== 'GET'
  ) {
    return;
  }

  if (
    event.request.mode === 'navigate' ||
    event.request.headers.get('accept').includes('text/html')
  ) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseClone);
            });
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then(cachedResponse => {
              return cachedResponse || caches.match('/');
            });
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request)
            .then(response => {
              const responseClone = response.clone();

              if (
                event.request.url.match(/\.(jpe?g|png|gif|svg|css|js|woff2?)/) ||
                event.request.url.includes('fonts.googleapis.com') ||
                event.request.url.includes('ext.same-assets.com') ||
                event.request.url.includes('stda.com.ar')
              ) {
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, responseClone);
                  });
              }

              return response;
            });
        })
    );
  }
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'PRECACHE_ROUTE') {
    const route = event.data.route;

    fetch(route)
      .then(response => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(new Request(route), responseClone);
          });
      });
  }
});
