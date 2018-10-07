function saludarRest(saludo, ...nombres) {
    for (i in nombres) {
        console.log(`${saludo} ${nombres[i]}`);
    }
}

function saludarSpread(saludo, ...nombres) {
    console.log(`${saludo} ${nombres}.`);
}

saludarRest("Hola Rest", "Ander", "Fernando", "Juan");
saludarSpread("Hola Spread", ["Ander", "Fernando", "Juan"]);

let partes = ["brazos", "piernas"];
let cuerpo = ["cabeza", "cuello", ...partes, "pies", "dedos"];

console.log(cuerpo);