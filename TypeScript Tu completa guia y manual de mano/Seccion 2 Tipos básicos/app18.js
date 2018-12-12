"use strict";
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 2] = "medio";
    Volumen[Volumen["maximo"] = 10] = "maximo";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(audio);
console.log(Volumen);
console.log(Volumen[1]);
