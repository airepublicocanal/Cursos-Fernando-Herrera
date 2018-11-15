//Cuando solo se usa una cache
//const CACHE_NAME = 'cache-1';
//Cahce de elementos estaticos APP SHELL
const CACHE_STATIC_NAME = 'static-v2';
//Cache de peticiones dinamicas
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
//Cache de elementos inmutables: ej la peticion de bootstrap
const CACHE_INMUTABLE_NAME = 'inmutable-v1';
//Limite de elementos en cache
const CACHE_DYNAMIC_LIMIT = 50;

function limpiarCache(cacheName, numItems) {
    caches.open(cacheName)
        .then(cache => {
            cache.keys()
                .then(keys => {
                    console.log(keys);
                    if (keys.length >= numItems) {
                        cache.delete(keys[0])
                            .then(limpiarCache(cacheName, numItems));
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
                '/js/app.js'
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

self.addEventListener('fetch', e => {
    //1- Cache Only: Se usa cuando queremos que toda la app se sirva desde el cache
    //e.respondWith(caches.match(e.request));

    //2- Cache With Network Fallback: Intenta primero en cache y sino va a Internet
    /*
    const respuesta = caches.match(e.request).then(res => {
        if (res) return res;

        //No existe el archivo y tengo que ir a internet
        console.log('No existe', e.request.url);

        return fetch(e.request).then(newResp => {
            //caches.open(CACHE_NAME)
            caches.open(CACHE_DYNAMIC_NAME).then(cache => {
                cache.put(e.request, newResp);
                limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT);
            });

            return newResp.clone();
        });
    });

    e.respondWith(respuesta);
    */

    //3- Network With Cache Fallback: Intenta primero en Internet y sino va a cache
    /*
    const respuesta = fetch(e.request).then(res => {
        if (res) return caches.match(e.request);
        console.log('Fetch', res);

        caches.open(CACHE_DYNAMIC_NAME).then(cache => {
            cache.put(e.request, res);
            limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT);
        });

        return res.clone();
    }).catch(err => {
        return caches.match(e.request);
    });

    e.respondWith(respuesta);
    */

    //4- Cache with network update: 
    //Cuando el rendimiento es critico
    //Siempre estarán un paso atras de la versión
    /*
    if (e.request.url.includes('bootstrap')) {
        return e.respondWith(caches.match(e.request));
    }

    const respuesta = caches.open(CACHE_STATIC_NAME).then(cache => {
        fetch(e.request).then(newRes => cache.put(e.request, newRes));

        return cache.match(e.request);
    });

    e.respondWith(respuesta);
    */

    //5- Cache & Network Race: Llama a Internet y al cache y devuelve el que responda más rapido
    const respuesta = new Promise((resolve, reject) => {
        let rechazada = false;

        const falloUnaVez = () => {
            if (rechazada) {
                if (/\.(png|jpg)$/i.test(e.request.url)) {
                    resolve(caches.match('/img/no-img.jpg'));
                } else {
                    reject('No se encontro respuesta');
                }
            } else {
                rechazada = true;
            }
        };

        fetch(e.request)
            .then(res => res.ok ? resolve(res) : falloUnaVez())
            .catch(falloUnaVez);

        caches.match(e.request)
            .then(res => res ? resolve(res) : falloUnaVez())
            .catch(falloUnaVez);
    });


    e.respondWith(respuesta);
});