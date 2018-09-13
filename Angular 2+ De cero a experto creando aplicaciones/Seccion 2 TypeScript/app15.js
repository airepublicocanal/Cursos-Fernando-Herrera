var miFunccion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log(miFunccion("Hola"));
console.log(miFunccion("Flecha"));
var miFunccion2 = function (a, b) {
    return a + b;
};
var miFunccion2F = function (a, b) { return a + b; };
console.log(miFunccion2(4, 5));
console.log(miFunccion2F(1, 3));
var miFunccion3 = function (nombre) {
    var nombre2 = nombre.toUpperCase();
    return nombre2;
};
var miFunccion3F = function (nombre) {
    var nombre2 = nombre.toUpperCase();
    return nombre2;
};
console.log(miFunccion3("Ander"));
console.log(miFunccion3F("Karmele"));
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!"); }, 1500);
    }
};
hulk.smash();
