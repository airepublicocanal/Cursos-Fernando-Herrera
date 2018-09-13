var persona = {
    nombre: "Maria",
    apellido: "Dubon",
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function() {
            console.log(this);
            console.log(this.pais);

            var self = this;

            var nuevaDireccion = function() {
                console.log(this);
                console.log("La direccion es " + this.pais);
                console.log("La direccion es " + self.pais);
            }

            nuevaDireccion();
        }
    },
    imprimirNombre: function() {
        console.log(this);
        console.log(this.nombre + " " + this.apellido);
    }
}

persona.imprimirNombre();
persona.direccion.obtenerPais();