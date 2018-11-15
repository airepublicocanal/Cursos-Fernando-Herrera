function sumarLento(numero) {
    var promesa = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(numero + 1);
            //reject('Sumar lento Fallo');
        }, 800);
    });

    return promesa;
}

let sumarRapido =
    (numero) => new Promise(
        (resolve, reject) => setTimeout(
            () => resolve(numero + 1), 300)
    );

//sumarLento(5).then(console.log);
//sumarRapido(10).then(console.log);

function retornaTrue() {
    return true;
}

let cosas = [sumarLento(5), sumarRapido(10), false, 'hola mundo', retornaTrue()];

//Se ejecuta cuando acaban todas
Promise.all(cosas)
    .then(console.log)
    .catch(console.error);