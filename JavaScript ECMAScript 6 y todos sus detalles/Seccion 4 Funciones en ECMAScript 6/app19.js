let persona1 = {
    nombre: "Fernando",
    edad: 33
}

let persona2 = {
    nombre: "Juan",
    edad: 18,
    direccion: "Residencial Bella Vista 233232",
    conduce: true,
    vehiculo: true,
    vegetariano: false,
    casado: true
}

persona1.direccion = persona2.direccion;
persona2.direccion = "Barrio el cacntilado";

console.log(persona1);
console.log(persona2);

console.log("--------------------");

persona1 = {
    ...persona2,
    ...persona1
};

console.log(persona1);
console.log(persona2);