//Se podría mapear asi pero es mejor usar una interface
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel: " + xmen.nombre);
}
var tormenta = {
    nombre: "Tormenta",
    poder: "control del tiempo"
};
enviarMision(tormenta);
enviarCuartel(tormenta);
