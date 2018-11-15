if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}

if (window.caches) {
    //Abre el elemento de cache, si no existe lo crea
    caches.open('prueba-1');
    caches.open('prueba-2');

    //Comprueba si tiene el elemento de cache
    caches.has('prueba-2').then(console.log);
    caches.has('prueba-3').then(console.log);

    //Elimina el elemento de cache
    caches.delete('prueba-1').then(console.log);
    caches.delete('prueba-3').then(console.log);

    caches.open('cache-v1.1');
}