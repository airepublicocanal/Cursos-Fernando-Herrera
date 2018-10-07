function saludo(mensaje, tiempo) {
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
}

saludo();
saludo("Hola");
saludo("Hola en 3 segundos", 3000);

//ES5
function saludo2(mensaje, tiempo) {
    mensaje = mensaje || "Hola Mundo";

    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
}

saludo2();
saludo2("Hola2");
saludo2("Hola2 en 3 segundos", 3000);

//ES5
function saludo3(mensaje, tiempo) {
    mensaje = (typeof mensaje !== "undefined") ? mensaje : "Hola Mundo2";

    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
}

saludo3();
saludo3("Hola3");
saludo3("Hola3 en 3 segundos", 3000);

//ES6
function saludo4(mensaje = "Hola Mundo3", tiempo = 1500) {
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo);
}

saludo4();
saludo4("Hola4");
saludo4("Hola4 en 3 segundos", 3000);

//ES5
function saludar(fn) {
    console.log(typeof fn);

    if (typeof fn === "undefined") {
        console.error("No es una funcion");
        return;
    }

    fn();
}

saludar();

console.log("------------------------");

//ES6
function saludar2(fn = function() {
    console.log("Saludar2");
}, persona = {
    nombre: "Fernando"
}) {
    fn();

    console.log(persona);
}

saludar2();
saludar2(function() {
    console.log("Saludar2");
}, {
    nombre: "Karmele"
});

console.log("------------------------");

//ES6
function saludar3(fn = fnTemp, persona = personaTemp) {
    fn();

    console.log(persona);
}

function fnTemp() {
    console.log("Funcion temporal");
}

let personaTemp = {
    nombre: "Ander"
}

function fnTemp2() {
    console.log("Funcion temporal2");
}

let personaTemp2 = {
    nombre: "Jon"
}

saludar3();
saludar3(fnTemp2, personaTemp2);