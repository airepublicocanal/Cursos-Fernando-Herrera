function getNombre() {
  return "Fernando";
}

let nombre = "Juan";
let apellido:string = "Perez";
let edad:number = 32;

//let texto = "Hola, " + nombre + " " + apellido + "(" + edad + ")";
let texto = `Hola,
              ${nombre} ${apellido}
              (${edad})`;

console.log(texto);

let texto2:string = `${1 + 2}`;

console.log(texto2);

let texto3:string = `${getNombre()}`;

console.log(texto3);
