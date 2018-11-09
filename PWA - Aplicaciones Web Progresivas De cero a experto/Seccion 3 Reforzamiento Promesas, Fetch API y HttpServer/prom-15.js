function sumarUno(numero, callback) {
    if (numero >= 7) {
        callback('Numero muy alto');
        return;
    }

    setTimeout(function() {
        callback(null, numero + 1);
    }, 800);
}

console.log(sumarUno(5, function(error, nuevoValor) {
    if (error) {
        console.log(error);
        return;
    }

    console.log(nuevoValor);
    sumarUno(nuevoValor, function(nuevoValor2) {
        if (error) {
            console.log(error);
            return;
        }

        sumarUno(nuevoValor2, function(nuevoValor3) {
            if (error) {
                console.log(error);
                return;
            }

            console.log(nuevoValor3);
        });
    });
}));