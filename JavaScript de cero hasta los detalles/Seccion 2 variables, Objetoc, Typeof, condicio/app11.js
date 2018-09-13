var persona = {
    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion: {
        provincia: "Bizkaia",
        ciudad: "Barakaldo",
        edificio: {
            calle: "San Bartolomé",
            portal: "5",
            piso: 12
        }
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.direccion);
console.log(persona.direccion.ciudad);

persona.direccion.cp = 48902;

console.log(persona.direccion);
console.log(persona.direccion.edificio.calle);

var edificio = persona.direccion.edificio;
console.log(edificio);

edificio.mano = "E";

console.log(persona);

var campo = "";

console.log(persona["nombre"]);
console.log(persona["direccion"]["provincia"]);

var edadField = "edad";

console.log(persona[edadField]);
console.log(persona["edadField"]);

console.log(persona.edadField);