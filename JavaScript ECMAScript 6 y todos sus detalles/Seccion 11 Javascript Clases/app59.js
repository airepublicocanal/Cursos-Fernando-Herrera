//ES5
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.gritarNombre = function() {
        console.log(this.nombre.toUpperCase() + "!!!");
    }
}

Persona.prototype.decirNombre = function() {
    console.log(this.nombre);
}

var fernando = new Persona("Fernando", "Herrera", 31);
fernando.gritarNombre();
fernando.decirNombre();

console.log(fernando instanceof Persona);
console.log(fernando instanceof Object);