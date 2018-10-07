let mapa = new Map([
    ["nombre", "Fernando"],
    ["edad", 31]
]);
console.log(mapa);

let mapa2 = new Map([
    ["nombre", "Fernando"],
    [null, 123],
    [undefined, "Hola"]
]);
console.log(mapa2);
console.log(mapa2.get(null));
console.log(mapa2.get(undefined));