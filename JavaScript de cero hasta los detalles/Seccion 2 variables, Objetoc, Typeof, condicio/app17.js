function Persona() {
    this.nombre = "Juan";
    this.apellido = "Mendoza";
    this.edad = 30;

    console.log("Paso por aqui");

    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido + " (" + this.edad + ")";
    };
}

function Casa(direccion) {
    this.direccion = direccion;
    return "Esto es una casa: " + this.direccion;
}

var juan = {};
console.log(juan);

var john = Persona();
console.log(john);

juan = new Persona();
console.log(juan);

console.log(juan.nombreCompleto());

var miCasa = Casa("Calle 2");
console.log(miCasa);