// Ciclo de vida del SW

//Se ejecuta al instalar el Service Worker
self.addEventListener('install', event => {
    //Descargar assets
    //Creamos una cache

    console.log('SW: Instalando SW');

    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('SW: Instalaciones terminadas')
            self.skipWaiting();
            resolve();
        }, 10);
    });

    //No se recomienda porque se puede perder informacion importante que el usuario espera
    //self.skipWaiting();

    event.waitUntil(instalacion);
});

//Se ejecuta al activar el Service Worker
self.addEventListener('activate', event => {
    //Borrar cache vieja

    console.log('SW: Activo y lisyo para controlar la app.');
});

//Se ejecuta al ejecutar peticiones
self.addEventListener('fetch', event => {
    //Apicar estrategias de cache
    /*
        console.log('SW: fetch', event.request.url);

        if (event.request.url.includes('https://reqres.in/')) {
            const resp = new Response(`{ok: false, mensaje: 'jajaja'}`);

            event.respondWith(resp);
        }
        */
});

//Se ejecuta cuando se recupera la conexion a internet
self.addEventListener('sync', event => {
    console.log('SW: Tenemos conexion!');
    console.log(event);
    console.log(event.tag);
})

//Maneja las notificaciones push
self.addEventListener('push', event => {
    console.log('SW: Notificacion Push');
});