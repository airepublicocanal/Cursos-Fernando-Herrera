var coche = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function() {
        return this.marca + " - " + this.color;
    }
}

console.log(coche.imprimir());

var logCoche = function(arg1, arg2) {
    console.log("Coche: " + this.imprimir());
    console.log("Argumentos:", arg1, arg2);
    console.log("###########################");
}

var logModeloCoche = logCoche.bind(coche);
logModeloCoche("abc", "xyz");

logModeloCoche.call(coche, "123", "456");

logModeloCoche.apply(coche, ["asd", "qwe"]);

var coche2 = {
    color: "Rojo",
    marca: "Toyota"
}
console.log(coche.imprimir.call(coche2));