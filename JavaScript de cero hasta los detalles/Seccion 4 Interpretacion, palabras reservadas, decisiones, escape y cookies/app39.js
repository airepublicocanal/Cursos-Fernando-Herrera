try {
    var a = 100;

    if (a === 101) {
        throw 'Que mal';
    } else {
        throw 'oh oh!';
    }

    console.log("El valor de a: ", a);
} catch (e) {
    if (e === "Que mal") {
        console.error("Error tipo 1");
    }

    if (e === "oh oh!") {
        console.error("Error tipo 2");
    }
    console.error("Parte del catch");
} finally {
    console.log("Finalmente");
}

try {
    throw new Error("Error tipo 1");

    console.log("Esta parte nunca se ejecuta");
} catch (e) {
    console.error(e);
    console.error(e.name);
    console.error(e.message);
    console.error("Parte del catch");
} finally {
    console.log("Finalmente");
}

try {
    throw {
        nombreError: "Error tipo 1",
        accion: "Salir corriendo a echarle agua al servidor",
        coderror: 1
    };
} catch (e) {
    console.error(e);
    console.error(e.message);
    console.error(e.nombreError);
    console.error(e.accion);
    console.error(e.coderror);
    console.error("Parte del catch");
} finally {
    console.log("Finalmente");
}

try {
    throw function() {
        console.log("Funcion del throw...");
    };
} catch (e) {
    console.error(e);
    console.error(e.message);
    e();
    console.error("Parte del catch");
} finally {
    console.log("Finalmente");
}

try {
    throw 1; //n cualquier numero
} catch (e) {
    console.error(e);
    console.error(e.message);
    registroError(e);
    console.error("Parte del catch");
} finally {
    console.log("Finalmente");
}

function registroError(e) {
    var ahora = new Date();
    console.log("Se registro un error:", e, "a las:", ahora);
}