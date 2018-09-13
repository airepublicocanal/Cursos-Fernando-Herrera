function crearFunciones() {
    var arr = [];
    var numero = 1;

    for(var numero = 1; numero <= 3; numero++) {
        arr.push(
            (function(numero) {
                return function() {
                    console.log(numero);
                }
            })(numero)
        );
    }

    
    numero = 4;
    arr.push(function() {
        console.log(numero);
    });

    
    numero = 5;
    arr.push(function() {
        console.log(numero);
    });

    return arr;
}

var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
funciones[3]();
funciones[4]();