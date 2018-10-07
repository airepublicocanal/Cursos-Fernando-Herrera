//ES5
var persona = {};

var apellido = "apellido";

persona["primer nombre"] = "Fernando";
persona[apellido] = "Herrera";

console.log(persona["primer nombre"]);
console.log(persona[apellido]);

var persona2 = {
    "primer nombre": "Juan"
}

console.log(persona2["primer nombre"]);

//ES6
let apellido2 = "primer apellido";
let persona3 = {
    "primer nombre": "Fernando",
    [apellido2]: "Herrera"
}

console.log(persona3["primer nombre"]);
console.log(persona3[apellido2]);

let subFijo = " nombre";
let persona4 = {
    ["primer" + subFijo]: "Melissa",
    ["segundo" + subFijo]: "Karen"
}

console.log(persona4["primer nombre"]);
console.log(persona4["segundo" + subFijo]);