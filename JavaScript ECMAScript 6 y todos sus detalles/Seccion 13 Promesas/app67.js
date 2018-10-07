function tareaAsincrona() {
    setTimeout(function() {
        console.log("Proceso Asincrono terminado");
        resolve();
        reject();
    }, 1300);
}

tareaAsincrona();

console.log("Codigo secuencial");

function resolve() {
    console.log("Todo OK");
}

function reject() {
    console.log("Todo MALO!");
}