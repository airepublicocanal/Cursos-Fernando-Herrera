var saludo = "Hola Mundo";
//ES5
console.log(saludo.substr(0, 1) === "H");
console.log(saludo.substr(0, 1) === "h");

//ES6
console.log(saludo.startsWith("H"));
console.log(saludo.startsWith("Hola"));
console.log(saludo.startsWith("h"));

console.log(saludo.endsWith("o"));
console.log(saludo.endsWith("undo"));

console.log(saludo.indexOf("x"));
console.log(saludo.indexOf("M"));

console.log(saludo.includes("x"));
console.log(saludo.includes("M"));

console.log(saludo.startsWith("Mu"));
console.log(saludo.startsWith("Mu", 5));

console.log(saludo.endsWith("Mu"));
console.log(saludo.endsWith("Mu", 7));

console.log(saludo.includes("a"));
console.log(saludo.includes("a", 5));