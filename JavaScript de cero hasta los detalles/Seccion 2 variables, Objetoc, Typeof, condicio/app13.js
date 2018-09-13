function imprimir(nombre) {
    console.log(nombre);
}

imprimir("Juan");

function imprimir2(nombre, apellido) {
    console.log(nombre + " " + apellido);
}

imprimir2("Juan", "Padilla");
imprimir2("Juan");
/*
function imprimir3(nombre) {
    console.log(nombre + " " + apellido);
}

imprimir3("Juan");
*/

function imprimir4(nombre, apellido) {
    /*
    if (apellido === undefined) {
        apellido = "Doe";
    }
    */
    apellido = apellido || "Doe",

    console.log(nombre + " " + apellido);
}

imprimir4("Juan", "Padilla");
imprimir4("Juan");

function imprimir5(persona) {
    console.log(persona.nombre + " " + persona.apellido);

    persona.nombre = "Maria";
}

imprimir5({ 
    nombre: "Juan",
    apellido: "Padilla"
});

var obj = {
    nombre: "Jane",
    apellido: "Doe"
}
imprimir5(obj);

console.log(obj);

function imprimir6(fn) {
    fn();
}

imprimir6(function() {
    console.log("Funcion anonima");
});

var miFuncion = function() {
    console.log("miFuncion");
}

imprimir6(miFuncion);