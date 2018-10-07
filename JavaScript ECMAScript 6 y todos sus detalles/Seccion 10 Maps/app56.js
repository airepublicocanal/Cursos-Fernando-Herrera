let mapa = new Map([
    ["nombre", "Fernando"],
    ["edad", 31]
]);

console.log(mapa);

mapa.forEach((valor, llave, mapaOriginal) => {
    console.log(`Llave: ${llave}, valor: ${valor}`);
    console.log(llave, mapaOriginal);
});

mapa.forEach((valor, llave) => console.log(`Llave: ${llave}, valor: ${valor}`));

mapa.forEach(valor => console.log(valor));