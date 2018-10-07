let miFuncion = function() {
    console.log("Hola Mundo");
}

miFuncion();

let otraFunction = miFuncion;

otraFunction();

console.log(typeof miFuncion);

let Persona = class {
    constructor() {
        this.nombre = "Mi nombre";
        this.edad = 30;
        this.direccion = "Mi direccion";
    }

    decirNombre() {
        console.log(this.nombre);
    }
}

let fernando = new Persona();

console.log(typeof fernando);
console.log(fernando instanceof Persona);