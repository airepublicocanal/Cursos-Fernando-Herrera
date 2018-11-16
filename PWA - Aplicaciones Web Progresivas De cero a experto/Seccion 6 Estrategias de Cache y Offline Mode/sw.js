//Cuando solo se usa una cache
//const CACHE_NAME = 'cache-1';
//Cahce de elementos estaticos APP SHELL
const CACHE_STATIC_NAME = 'static-v3';
//Cache de peticiones dinamicas
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
//Cache de elementos inmutables: ej la peticion de bootstrap
const CACHE_INMUTABLE_NAME = 'inmutable-v1';
//Limite de elementos en cache
const CACHE_DYNAMIC_LIMIT = 50;

function limpiarCache(cacheName, numItems) {
    caches.open(cacheName).then(cache => {
        cache.keys().then(keys => {
            console.log(keys);
            if (keys.length >= numItems) {
                cache.delete(keys[0]).then(limpiarCache(cacheName, numItems));
            }
        });
    });
}

self.addEventListener('install', e => {
    //const cacheProm = caches.open(CACHE_NAME)
    const cacheStaticProm = caches.open(CACHE_STATIC_NAME)
        .then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/img/main.jpg',
                '/img/no-img.jpg',
                '/js/app.js',
                '/pages/offline.html'
            ]);
        });

    const cacheInmutableProm = caches.open(CACHE_INMUTABLE_NAME)
        .then(cache => {
            return cache.addAll([
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
            ]);
        });

    e.waitUntil(Promise.all([cacheStaticProm, cacheInmutableProm]));
});

self.addEventListener('activate', e => {
    const resultado = caches.keys().then(keys => {
        keys.forEach(key => {
            if (key !== CACHE_STATIC_NAME && key.includes('static')) {
                return caches.delete(key);
            }
        });
    });

    e.waitUntil(resultado);
});

self.addEventListener('fetch', e => {
    //2- Cache With Network Fallback: Intenta primero en cache y sino va a Internet
    const respuesta = caches.match(e.request).then(res => {
        if (res) return res;

        return fetch(e.request).then(newResp => {
            caches.open(CACHE_DYNAMIC_NAME).then(cache => {
                cache.put(e.request, newResp);
                limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT);
            });

            return newResp.clone();
        }).catch(err => {
            if (e.request.headers.get('accept').includes('text/html')) {
                return caches.match('/pages/offline.html');
            }

        });
    });

    e.respondWith(respuesta);
});