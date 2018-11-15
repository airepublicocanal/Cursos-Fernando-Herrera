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

    caches.open('cache-v1.1').then(cache => {
        //Añade un elemento a esta cache
        //cache.add('/index.html');

        //Añade multiples elemento a esta cache
        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg'
        ]).then(() => {
            //Se borra aqui porque sino borraria antes de llegar  crearlo y no se borraria nunca
            //Borra un elemento de esta cache
            cache.delete('/css/style.css');

            //Reemplaza el elemento de esta cache
            cache.put('/index.html', new Response('Hola Mundo'));
        });

        //Busca si el elemento esta en esta cache
        cache.match('/index.html')
            .then(res => {
                console.log(res.text().then(console.log));
            });
    });

    //Obtiene todos los elementos de cache
    caches.keys().then(console.log);
}