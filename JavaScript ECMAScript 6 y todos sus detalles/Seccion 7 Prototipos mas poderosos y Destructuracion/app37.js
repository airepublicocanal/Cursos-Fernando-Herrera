let autoGuardado = {
    archivo: "app.js",
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo: {
        archivo: "index.html",
        cursor: {
            linea: 8,
            columna: 20
        }
    },
    otroNodo: {
        subNodo: {
            cursor: {
                linea: 11,
                columna: 11
            }
        }
    }
};

console.log(autoGuardado);

let { cursor: cursorActivo } = autoGuardado;
console.log(cursorActivo);

let { ultimoArchivo: { cursor } } = autoGuardado;
console.log(cursor);

let { otroNodo: { subNodo: { cursor: otroSuperNodo } } } = autoGuardado;
console.log(otroSuperNodo);

let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log(otroSuperNodo2);