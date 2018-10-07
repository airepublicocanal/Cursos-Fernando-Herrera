let persona1 = {
    nombre: "Fernando",
    edad: 33
}

let persona2 = persona1;

persona2.nombre = "Juan";

console.log(persona1);
console.log(persona2);

console.log("-------------------");

persona2 = {...persona1 };

persona2.nombre = "Carlos";

console.log(persona1);
console.log(persona2);