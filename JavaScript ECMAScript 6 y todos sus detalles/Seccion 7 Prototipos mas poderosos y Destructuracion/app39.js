let colores1 = ["rojo", ["verde", "amarillo"], "morado", "naranja"];

let [color1, [color2]] = colores1;
console.log(color1, color2);

let [color3, [, color4]] = colores1;
console.log(color3, color4);

let colores2 = ["rojo", "verde", "amarillo", "morado", "naranja"];

let [colorPrincipal, colorSecundario, ...demasColores] = colores2;
console.log(colorPrincipal, colorSecundario, demasColores);

let colores3 = ["rojo", "verde"];

let [colorPrincipal2, colorSecundario2, ...demasColores2] = colores3;
console.log(colorPrincipal2, colorSecundario2, demasColores2);