let frutas = ["banano"];

let [fruta1, fruta2 = "manzana"] = frutas;
console.log(fruta1);
console.log(fruta2);

let frutas2 = ["banano", "pera"];

let [fruta3, fruta4 = "manzana"] = frutas2;
console.log(fruta3);
console.log(fruta4);

let opciones = {
    nombre: "Fernando"
};

let { nombre, apellido = "Herrera" } = opciones;
console.log(nombre, apellido);