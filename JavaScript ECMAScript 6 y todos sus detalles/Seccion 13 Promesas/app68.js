function tareaAsincrona() {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Proceso Asincrono terminado");
            resolve();
            //reject();
        }, 1300);
    });

    return promesa;
}

tareaAsincrona().then(
    () => console.log("Todo OK."),
    () => console.error("Todo MAL") //ES OPCIONAL
);

console.log("Codigo secuencial");