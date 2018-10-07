let nombreMetodo = "gritarNombre";

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    decirNombre() {
        console.log(this.nombre);
    }

    [nombreMetodo]() {
        console.log(this.nombre.toUpperCase() + "!!!");
    }

    static crear(nombre) {
        return new Persona(nombre);
    }
}
let yo = Persona.crear("Fernando");

console.log(yo);
console.log(yo.gritarNombre());

let otraPersona = yo.crear("Juan");