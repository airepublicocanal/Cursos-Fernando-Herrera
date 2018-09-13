function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function(jugadorObjetivo) {
        if (this.sp > 40) {
            jugadorObjetivo.pv += 20;

            if (jugadorObjetivo.pv > 100) {
                jugadorObjetivo.pv = 100;
            }

            this.sp -= 40;
        } else {
            console.info("Gandalf no tiene sp");
        }

        this.estado(jugadorObjetivo);
    };

    this.atacar = function(jugadorObjetivo) {
        if (jugadorObjetivo.pv > 0) {
            jugadorObjetivo.pv -= 40;

            if (jugadorObjetivo.pv <= 0) {
                jugadorObjetivo.pv = 0;
                console.error(this.nombre + " ha matado a " + jugadorObjetivo.nombre + "!!!");
            }
        } else {
            console.warn(jugadorObjetivo.nombre + " ya esta muerto")
        }

        this.estado(jugadorObjetivo);
    };

    this.estado = function(jugadorObjetivo) {
        console.info(this);
        console.info(jugadorObjetivo);
    };
}

var gandalf = new Jugador("Gandalf");
var legolas = new Jugador("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.curar(legolas);