"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XMen = (function () {
    function XMen(nombre, clave) {
        this.nombre = nombre;
        this.clave = clave;
    }
    XMen.prototype.imprimir = function () {
        console.log(this.nombre + " - " + this.clave);
    };
    return XMen;
}());
exports.XMen = XMen;
