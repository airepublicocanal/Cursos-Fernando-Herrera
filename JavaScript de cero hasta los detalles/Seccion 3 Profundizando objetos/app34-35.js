var reg1 = RegExp("a");
var reg2 = /a/;

var texto = "Hola Mundo";

console.log(texto.match(reg1));
console.log(texto.match(reg2));
console.log(texto.match("a"));
console.log(texto.match("A"));

//Empieza por H
console.log(texto.match(/^H/));

//Termina por o
console.log(texto.match(/o$/));

//Los 3 primeros caracteres
console.log(texto.match(/.../));

//Empieza por cualquier caracter y continua con o
console.log(texto.match(/^.o/));

texto = "Hola Mundo, 12345";
//Busca un rango de 0 a 9
console.log(texto.match(/[0-9]/));

//Busca un 0, 6, 7, 8 o 9
console.log(texto.match(/[06789]/));

//Busca un rango de a-z
console.log(texto.match(/[a-z]/));

//Busca un rango de a-z o a-Z
console.log(texto.match(/[a-zA-Z]/));

//Empieza por cualquier caracter y continua con cualquier letra del rango a-z
console.log(texto.match(/^H[a-z]/));

//Empieza por cualquier caracter y continua con cualquier vocal minuscula
console.log(texto.match(/^H[aeiou]/));

texto = "Hola Mundo.";
//Busca un rango de a-z
console.log(texto.match(/[aeiou]./));

//Busca una separacion
console.log(texto.match(/\s/));

//Busca una letra o numero [a-zA-Z0-9]
console.log(texto.match(/\w/));

texto = "Hola 9 Mundo";
//Busca un numero
console.log(texto.match(/\d/));

texto = "Hola Mundo.";
//Busca una m en minus o mayus
console.log(texto.match(/m/i));

//Busca todos los resultados de vocales
console.log(texto.match(/[aeiou]/g));

texto = "Hola Mundo.\nQué tal";
console.log(texto);
//Busca todos los resultados de vocales en minus y mayus
console.log(texto.match(/[aeiou]/ig));

//Busca una m en minus o mayus [aeiouáéíóú]
console.log(texto.match(/[aeiou]|[áéíóú]/ig));

texto = "Holaa Mundooo.";
//Busca todas las a
console.log(texto.match(/a/g));

//Busca todas las cadenas de minimo 1 o
console.log(texto.match(/o+/g));

//Busca todas las cadenas que contengan o no la o
console.log(texto.match(/o?/g));

//Busca todas las cadenas de minimo 0 o
console.log(texto.match(/o*/g));

//Busca todas las cadenas de 2 o
console.log(texto.match(/o{2}/g));

texto = "Holaa Mundooo. Hoola de nuevoooo";
//Busca todas las cadenas de 2 o mas o
console.log(texto.match(/o{2,}/g));

//Busca todas las cadenas de 2 o 3 o
console.log(texto.match(/o{2,3}/g));

texto = "Aeropuerto";
//Busca todas las cadenas de 2 vocales mayus y minus
console.log(texto.match(/[aeiou]{2,2}/ig));

//Busca todas las cadenas de 2 letras mayus y minus
console.log(texto.match(/\w{2,2}/ig));

texto = "La respuesta de la suma es: 45 + 60 = 105";
//Busca todas las cadenas de 1 o mas numeros
console.log(texto.match(/\d{1,}/g));

//Busca la cadena respuesta y todas las cadenas de 1 o mas numeros
console.log(texto.match(/respuesta|\d{1,}/g));