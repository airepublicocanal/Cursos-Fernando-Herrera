let numeros = [100, 20, 30, 50, 200];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

console.log("-------------");

for (let i in numeros) {
    console.log(numeros[i]);
}

console.log("-------------");

for (let numero of numeros) {
    console.log(numero);
}

console.log("-------------");

let personas = [
    { nombre: "Fernando", edad: 30 },
    { nombre: "Maria", edad: 10 },
    { nombre: "Susana", edad: 18 },
    { nombre: "Victor", edad: 25 },
    { nombre: "Juan", edad: 40 },
];

for (let persona of personas) {
    console.log(persona.nombre, persona.edad);
}

console.log("-------------");

let personasSet = new Set();

personasSet.add({ nombre: "Fernando", edad: 30 });
personasSet.add({ nombre: "Maria", edad: 10 });
personasSet.add({ nombre: "Susana", edad: 18 });
personasSet.add({ nombre: "Victor", edad: 25 });
personasSet.add({ nombre: "Juan", edad: 40 });

for (let persona of personasSet) {
    console.log(persona.nombre, persona.edad);
}

console.log("-------------");

let personasMap = new Map();

personasMap.set("nombre", "Fernando");
personasMap.set("edad", 31);

for (let persona of personasMap) {
    console.log(persona);
}