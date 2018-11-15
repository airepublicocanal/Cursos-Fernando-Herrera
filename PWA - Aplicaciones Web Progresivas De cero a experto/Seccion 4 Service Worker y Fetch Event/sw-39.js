self.addEventListener('fetch', event => {
    console.log(event);

    if (event.request.url.includes('main.jpg')) {
        const respuesta = fetch('img/main-patas-arriba.jpg');
        event.respondWith(respuesta);
    } else {
        event.respondWith(fetch(event.request));
    }
});