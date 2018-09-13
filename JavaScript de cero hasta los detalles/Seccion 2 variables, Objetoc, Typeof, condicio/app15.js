function a() {
    console.log("Funcion a");
}

a();

console.log(a.apply);

a.apply = "Maria";
console.log(a.apply);

a.nombre = "Maria";
a.direccion = {
    pais: "Costa Rica",
    ciudad: "San Jose",
    edificio: {
        piso: "8vo",
        nombre: "Edificio"
    }
}
console.log(a.direccion.edificio.piso);