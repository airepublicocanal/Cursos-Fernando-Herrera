var nombre = "Juan";

//ES5
function Persona(nombre) {
    if (this instanceof Persona) {
        this.nombre = nombre;
    } else {
        throw new Error("Esta funcion debe de ser utilizada con el new");
    }
}

var persona = new Persona("Fernando");
//var noPersona = Persona("Ander");

console.log(persona);
//console.log(noPersona);

console.log(nombre);

persona = new Persona("Fernando");
noPersona = Persona.call(persona, "Ander");

console.log(persona);
//console.log(noPersona);

console.log(nombre);

//ES6
function Persona2(nombre) {
    if (typeof new.target !== "undefined") {
        this.nombre = nombre;
    } else {
        throw new Error("Esta funcion debe de ser utilizada con el new");
    }
}

var persona2 = new Persona2("Fernando");
//var noPersona2 = Persona2("Ander");

console.log(persona2);
//console.log(noPersona2);

console.log(nombre);

persona2 = new Persona2("Fernando");
noPersona2 = Persona.call(persona2, "Ander");

console.log(persona2);
//console.log(noPersona2);

console.log(nombre);