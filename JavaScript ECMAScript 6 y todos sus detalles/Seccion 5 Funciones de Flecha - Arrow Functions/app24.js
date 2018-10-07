//ES5
var saludo1 = function(nombre) {
    return "Hola " + nombre;
}("Fernando");

console.log(saludo1);

//ES6
var saludo2 = (nombre => `Hola ${nombre}`)("Juan");

console.log(saludo2);