let personas = new Set(["Fernando", "Maria", "Susana"]);
console.log(personas.size);
console.log(personas);

personas.forEach(function(valor, llave, setOriginal) {
    console.log(valor, llave, setOriginal);
    console.log(personas === setOriginal);
});