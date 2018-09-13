var objetoJS = {
    nombre: "Fernando",
    edad: 30,
    imprimir: function() {
        console.log(this.nombre, this.edad);
    }
}

console.log("Objeto literal", objetoJS);

var jsonString = JSON.stringify(objetoJS);

console.log("Objeto JSON", jsonString);

var objetoDesdeJSON = JSON.parse(jsonString);

console.log("Objeto Desde JSON", objetoDesdeJSON);

console.log(objetoDesdeJSON.nombre);
console.log(objetoDesdeJSON.edad);