//var a = 30;

function primeraFuncion() {
    //var a = 20;
    console.log(a);
}

primeraFuncion();

var a = 40;

console.log(primeraFuncion());

var a = primeraFuncion();

console.log(a);

function segundaFuncion() {
    console.log("Invocada");
}

var miFuncion = segundaFuncion;