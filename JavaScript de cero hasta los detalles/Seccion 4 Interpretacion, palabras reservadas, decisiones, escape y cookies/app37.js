//Comentario línea simple

/*
    Comentario
    multilinea
*/

var miArreglo = [
    // La primera po...
    // sirva para...
    // hace...


    "Fernando",
    // La segunda...
    // es un objeto...
    // hace...
    {
        // Esta ropiedad hace...
        // por lo cual...
        // es bueno...
        nombre: "Fernando",


        /*
        Esta ropiedad hace...
        por lo cual...
        es bueno...
        */

        apellido: "Herrera",

        // Esta propiedad hace...
        // por lo cual...
        // es bueno...
        // no tiene parametros...
        // pero puede...
        getNombre: function() {
            return this.nombre + " " + this.apellido;
        }
    },
    // Tercera po...
    true,

    // Funcion de la cuarta...
    // ...
    function() {
        console.log(this);
    }

// Fin del array principal
// No hacer nada despues
];

console.log(miArreglo);