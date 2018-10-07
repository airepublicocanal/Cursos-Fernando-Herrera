//ES6
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    };

    gritarNombre() {
        console.log(this.nombre.toUpperCase() + "!!!");
    }

    decirNombre() {
        console.log(this.nombre);
    }
}

let fernando = new Persona("Fernando", "Herrera", 31);

fernando.gritarNombre();
fernando.decirNombre();

console.log(fernando instanceof Persona);
console.log(fernando instanceof Object);

console.log(typeof Persona);
console.log(typeof Persona.prototype.decirNombre);