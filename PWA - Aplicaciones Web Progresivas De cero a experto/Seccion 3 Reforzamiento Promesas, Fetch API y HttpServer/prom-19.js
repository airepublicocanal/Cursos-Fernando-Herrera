function sumarLento(numero) {
    var promesa = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(numero + 1);
        }, 800);
    });

    return promesa;
}

let sumarRapido = (numero) => new Promise(
    (resolve, reject) => setTimeout(
        () => resolve(numero + 1), 300)
);

//Se ejecuta cuando acaba alguna
Promise.race([sumarLento(5), sumarRapido(10)])
    .then(console.log)
    .catch(respuesta => console.error(respuesta));