"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villano = (function () {
    function Villano(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    Villano.prototype.imprimir = function () {
        console.log("el plan de " + this.nombre + " es: " + this.plan);
    };
    return Villano;
}());
exports.Villano = Villano;
