//ES5
function mezclar(objReceptor, objDonador) {
    Object.keys(objDonador).forEach(function(key) {
        objReceptor[key] = objDonador[key];
    });

    return objReceptor;
}

var objReceptor = {};
var objDonador = {
    //nombre: "mi-archivo.js",
    get nombre() {
        return "mi-archivo.js"
    }
}

console.log(objDonador);
console.log(mezclar(objReceptor, objDonador));

//ES6
let objReceptor2 = {};
let objDonador2 = {
    //nombre: "mi-archivo.js",
    get nombre() {
        return "mi-archivo.js"
    }
}

console.log(objDonador2);
console.log(Object.assign(objReceptor2, objDonador2));