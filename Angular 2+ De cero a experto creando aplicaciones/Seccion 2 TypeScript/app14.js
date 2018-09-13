function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon");
activar("Gordon", "batseñal");
activar("Gordon", "batseñal", "tarde");
