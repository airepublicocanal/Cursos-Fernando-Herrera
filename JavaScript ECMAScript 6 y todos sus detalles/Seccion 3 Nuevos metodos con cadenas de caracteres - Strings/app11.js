function etiqueta(literales, ...substituciones) {
    console.log(arguments);
    console.log(literales);
    console.log(substituciones);

    let resultado = "";

    for (let i = 0; i < substituciones.length; i++) {
        resultado += literales[i];
        resultado += substituciones[i];
    }

    return resultado;
}

let unidades = 5,
    costo_unitario = 10;

let mensaje = etiqueta `${unidades} lapices cuesta ${unidades * costo_unitario} pesos.`;
console.log(mensaje);