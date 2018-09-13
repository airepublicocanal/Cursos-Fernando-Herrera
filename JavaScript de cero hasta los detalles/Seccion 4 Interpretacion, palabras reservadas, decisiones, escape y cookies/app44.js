var nota = 50;

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else {
    if (nota < 40)
        console.log("Algo por aqui...");

    if (nota < 50) {
        console.log("-E");
    } else {
        console.log("+E");
    }
}

var a = 10;
var b = 20;
var c = (a > b) ? a : b;
console.log(c);

var d = 20;
var e = 10;
var f = (d > e) ? function() {
    console.log("D es mayor que E");
    return d;
}() : function() {
    console.log("E es mayor que D");
    return e;
}();
console.log(f);

console.log("Termino");

var g = undefined;
var h = 10;
var i = g || h;
console.log(i);

g = 30;
h = 10;
i = g || h;
console.log(i);

console.log("Termino");

function getNombre(nombre) {
    var nomb = nombre || "<sin nombre>";

    console.log(nomb);
}

getNombre();
getNombre("Fernando");

function getApellido(apellido) {
    var ap = apellido || null || undefined;

    console.log(ap);
}

getApellido();
getApellido("Herrera");
getApellido(null);