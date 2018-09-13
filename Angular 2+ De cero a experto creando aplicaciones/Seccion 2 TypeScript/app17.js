var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Terminada");
        //Termina bien
        //resolve();
        //Termina mal
        reject();
    }, 2500);
});
console.log("Paso 1");
prom1.then(function () {
    console.log("Ejecutame cuando se termine bien");
}, function () {
    console.log("Ejecutar si todo sale mal");
});
console.log("Paso 2");
