function getNombre() {
    return "Fernando";
}
var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";
var texto = "Hola,\n              " + nombre + " " + apellido + "\n              (" + edad + ")";
console.log(texto);
var texto2 = "" + (1 + 2);
console.log(texto2);
var texto3 = "" + getNombre();
console.log(texto3);
