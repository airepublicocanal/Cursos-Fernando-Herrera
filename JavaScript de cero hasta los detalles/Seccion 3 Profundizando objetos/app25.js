function crearProducto(nombre, precio) {
    nombre = nombre || "Sin nombre";
    precio = precio || 0;

    console.log("Producto: ", nombre, "Precio: ", precio);
}

crearProducto();
crearProducto("Lapiz");
crearProducto("Boli", 0.5);

function crearProducto100(nombre) {
    crearProducto(nombre, 100);
}

crearProducto100();
crearProducto100("Goma");

function crearProductoCamisa(precio) {
    crearProducto("Camisa", precio);
}

crearProductoCamisa();
crearProductoCamisa(20);