function obtenerNombre() {
    return "Maria Perez";
}

let nombre = "Maria";
let apellido = "Perez";

//ES5
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//ES6
let nombreCompleto2 = `El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto2);

let nombreCompleto3 = `El nombre completo es ${obtenerNombre()}`;
console.log(nombreCompleto3);

console.log(`${1 + 2}`);

let multilinea = "<h1 class='algo'>Titulo</h1>\n<p>Hola Mundo</p>";
console.log(multilinea);

let multilinea2 = `<h1 class="algo">${nombre}</h1>
<p>${apellido}</p>`;
console.log(multilinea2);