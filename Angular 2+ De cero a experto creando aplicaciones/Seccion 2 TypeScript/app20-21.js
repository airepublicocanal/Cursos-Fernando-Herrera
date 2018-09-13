var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = false;
        this.peleasGanadas = 0;
    }
    return Avenger;
}());
var antman = new Avenger("Ant-Man", "Capitan America", "Scott Lang");
console.log(antman);
