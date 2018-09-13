function determinaDato(a) {
    if (a === undefined) {
        console.log("A es undefined... no se que hacer.");
    }

    if (typeof a === "number") {
        console.log("A es un número y puede hacer operaciones con números.");
    }

    if (typeof a === "string") {
        console.log("A es un texto y puede hacer operaciones con textoss.");
    }

    if (typeof a === "object") {
        console.log("A es un Objeto... pero puede ser cualquier cosa.");

        if (a instanceof Number) {
            console.log("A es un Objeto numerico.");
        }
    }
}

determinaDato();
determinaDato(10);
determinaDato("Fernando");
determinaDato({
    nombre: "Fernando"
});

var b = new Number(3);
console.log(b);
determinaDato(b);