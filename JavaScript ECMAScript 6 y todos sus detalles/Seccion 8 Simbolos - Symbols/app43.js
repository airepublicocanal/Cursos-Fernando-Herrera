let primerNombre = Symbol("Primer nombre");
let segundoNombre = Symbol();

let persona = {
    [segundoNombre]: "Herrera"
};

persona[primerNombre] = "Fernando";

console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);

console.log(primerNombre);
console.log(segundoNombre);

console.log(typeof primerNombre);

let simbolo1 = Symbol("Simbolo");
let simbolo2 = Symbol("Simbolo");

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(Object.is(simbolo1, simbolo2));

//console.log("Mi simbolo" + primerNombre);
//console.log(`Mi simbolo ${primerNombre}`);

console.log('Primer nombre' in persona);