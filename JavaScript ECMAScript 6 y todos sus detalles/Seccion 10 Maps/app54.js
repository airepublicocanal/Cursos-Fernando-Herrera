let mapa = new Map();
console.log(mapa);

mapa.set("nombre", "Fernando");
mapa.set("edad", 31);
console.log(mapa);
console.log(mapa.size);

console.log(mapa.get("nombre"));
console.log(mapa.get("edad"));

console.log(mapa.has("nombre"));
console.log(mapa.has("apellido"));

mapa.set("apellido");
console.log(mapa);
console.log(mapa.size);

mapa.set();
console.log(mapa);
console.log(mapa.size);

mapa.set({}, { hola: "Hola Mundo" });
console.log(mapa);
console.log(mapa.size);
console.log(mapa.get({}));

mapa.delete("nombre");
console.log(mapa);
console.log(mapa.size);
console.log(mapa.get("nombre"));
console.log(mapa.has("nombre"));

mapa.set("edad");
console.log(mapa);
console.log(mapa.size);

mapa.clear();
console.log(mapa);
console.log(mapa.size);