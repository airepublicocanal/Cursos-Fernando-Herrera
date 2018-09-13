setTimeout(function() {
    console.log("Pasaron 3 segundos");
}, 3000);

var segundos = 0;

var intervalo = setInterval(function() {
        segundos++;
        console.log("seg", segundos);

        if (segundos === 4) {
            clearInterval(intervalo);
        }
    },
    1000);

nombre = "Pedro";
edad = 60;

var juan = {
    nombre: "Juan",
    edad: 30,
    imrpimir: function() {
        var self = this;
        setTimeout(function() {
            console.log(this.nombre, this.edad);
            console.log(this);

            console.log(self.nombre, self.edad);
            console.log(self);
        }, 5000);

        console.log(this.nombre, this.edad);
    }
};

juan.imrpimir();