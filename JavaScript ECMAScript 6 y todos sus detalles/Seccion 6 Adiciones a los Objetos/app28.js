//ES5
function crearPersona(nombre, apellido, edad) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}

var melissa = crearPersona("Melissa", "Flores", 30);
console.log(melissa);

//ES6
function crearPersona2(nombre, apellido, edad) {
    return {
        nombre,
        apellido,
        edad
    }
}

let melissa2 = crearPersona2("Melissa", "Flores", 30);
console.log(melissa2);