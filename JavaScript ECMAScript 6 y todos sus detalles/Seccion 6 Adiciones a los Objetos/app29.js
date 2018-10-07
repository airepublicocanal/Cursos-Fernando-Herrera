//ES5
var persona = {
    nombre: "Fernando",
    getNombre: function() {
        console.log(this.nombre);
    }
}

persona.getNombre();

//ES6
let persona2 = {
    nombre: "Juan",
    getNombre() {
        console.log(this.nombre);
    }
}

persona2.getNombre();