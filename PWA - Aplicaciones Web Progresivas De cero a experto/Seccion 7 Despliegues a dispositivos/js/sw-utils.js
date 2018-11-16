//Guarda en el cache dynamico
function actualizaCacheDynamic(dynamicCache, req, res) {
    if (res.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else {
        return res;
    }
}

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