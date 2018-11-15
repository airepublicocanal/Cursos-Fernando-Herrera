self.addEventListener('fetch', event => {
    //Poniendo en index.html main-2.jpg para forzar el error

    const resp = fetch(event.request)
        .then(resp => resp.ok ? resp : fetch('img/main.jpg'));

    event.respondWith(resp);
});