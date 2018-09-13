function obtenerAleatorio() {
    return Math.random();
}

console.log(obtenerAleatorio() + 10);

function obtenerNombre() {
    return "Juan";
}

console.log(obtenerNombre() + " Padilla");

var nombre = obtenerNombre();
console.log(nombre);

function esMayor05() {
    if (obtenerAleatorio() > 0.5) {
        return true;
    } else {
        return false;
    }
}

console.log(esMayor05());

if (esMayor05()) {
    console.log("Es Mayor a 0.5");
} else {
    console.log("Es Menor a 0.5");
}

function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona("Ander", "Cadaval");
console.log(persona);
console.log(persona.nombre);

function crearFuncion() {
    return function() {
        console.log("Me crearon!");
    }
}

var nuevaFuncion = crearFuncion();

nuevaFuncion();

function meCrearon2() {
    return function(nombre) {
        console.log("Me creo " + nombre);
    }
}

var otraFuncion = meCrearon2();
otraFuncion(persona.nombre);

function meCrearon3() {
    return function(nombre) {
        console.log("Hola funcion 3");

        return function() {
            console.log("Funcion de tercer nivel");
        }
    }
}

var otraFuncion2 = meCrearon3();
otraFuncion2(persona.nombre);

var tercerNivel = otraFuncion2(persona.nombre);
tercerNivel();