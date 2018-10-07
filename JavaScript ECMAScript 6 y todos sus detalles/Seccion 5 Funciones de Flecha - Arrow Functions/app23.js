//ES5
var miFuncion2 = function(valor) {
    return valor;
}

console.log(miFuncion2("Hola"));

var sumar2 = function(num1, num2) {
    return num1 + num2;
}

console.log(sumar2(3, 6));

var saludar2 = function() {
    return "Hola Mundo ES5";
}

console.log(saludar2());

var saludarPersona2 = function(nombre) {
    var salida = "Hola ES5, " + nombre;
    return salida;
}

console.log(saludarPersona2("Fernando"));

var obtenerLibro2 = function(id) {
    return {
        id: id,
        nombre: "Harry Potter"
    }
}

console.log(obtenerLibro2(3));

//ES6
let miFuncion = valor => valor;

console.log(miFuncion("Que tal"));

let sumar = (num1, num2) => num1 + num2;

console.log(sumar(4, 2));

let saludar = () => "Hola Mundo ES6";

console.log(saludar());

let saludarPersona = nombre => {
    let salida = `Hola ES6, ${nombre}`;
    return salida;
}

console.log(saludarPersona("Juan"));

let obtenerLibro = id => ({ id: id, nombre: "La Torre Oscura" });

console.log(obtenerLibro(1));