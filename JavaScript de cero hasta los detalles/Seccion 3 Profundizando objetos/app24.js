var arguments = 10;

function miFuncion(a, b, c, d) {
    //console.log(arguments)
    console.log(a, b, c, d);
    if (arguments.length != 4) {
        console.log("La función necesita 4 parametros.");
        return;
    }

    console.log(a + b + c + d);
}

miFuncion(10, 20, 30);

miFuncion(10, 20, 30, 40);