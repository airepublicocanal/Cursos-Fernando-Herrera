/*
Si se pone delante el fichero afecta a todo el fichero 
y a los ficheros que se carguen destras de este
NO SE RECOMIENDA
*/
"use strict";

nombre = "Fernando";
console.log(nombre);

function getNombre() {
    //Solo afecta a esta funcion
    "use strict";

    nombre2 = "Juan";
    return nombre2;
}

console.log(getNombre());

(function() {
    /*
    Solo afecta a esta funcion, si se mete todo el codigo del 
    fichero en esta funcion anonima, no afecta al resto de ficheros
    */
    "use strict";

    function getApellido() {
        apellido = "Ortiz";
        return apellido;
    }

    console.log(getApellido());
})();