let texto = "Hola";

console.log(texto.repeat());
console.log(texto.repeat(1));
console.log(texto.repeat(2));

console.log("Mundo".repeat(3));

const ESPACIOS = 12;

let nombres = ["Fernando", "Melisa", "Juan"];
let telefonos = ["666998877", "485227799", "334488364"];

for (i in nombres) {
    let dif = ESPACIOS - nombres[i].length;

    console.log(nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
}