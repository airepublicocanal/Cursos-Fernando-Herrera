let id = Symbol.for("id");
let numero = 10;
let texto = "10";
let bool = true;
let NotAN = NaN;

console.log(numero + texto);
console.log(numero + Number(texto));
console.log(numero + NotAN);
console.log(bool + bool);
//console.log(texto + id);
console.log(texto, id);
console.log(texto + String(id));