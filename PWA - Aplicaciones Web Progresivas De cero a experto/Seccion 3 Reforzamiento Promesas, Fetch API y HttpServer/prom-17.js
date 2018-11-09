function sumarUno(numero, callback) {
    var promesa = new Promise(function(resolve, reject) {
        console.log(numero);
        if (numero >= 7) {
            reject('Numero muy alto');
        }

        setTimeout(function() {
            resolve(numero + 1);
        }, 800);
    });

    return promesa;
}

sumarUno(5)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(nuevoNumero => console.log(nuevoNumero))
    .catch(error => {
        console.log("Error EN PROMESA");
        console.log(error);
    });