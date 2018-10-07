//ES5
function agregarAlumno() {
    console.log(arguments);

    for (var i = 1; i < arguments.length; i++) {
        arguments[0].push(arguments[i]);
    }

    return arguments[0];
}

var alumnos = ["Fernando"];
var alumnos2 = agregarAlumno(alumnos, "Maria", "Pedro", "Susana", "Juan");

console.log(alumnos2);

console.log("-----------------------");

//ES6
function agregarAlumno2(alumnosArr, ...alumnos) {
    console.log(arguments);

    for (i in alumnos) {
        alumnosArr.push(alumnos[i]);
    }

    return alumnosArr;
}

var alumnos3 = ["Fernando"];
var alumnos4 = agregarAlumno2(alumnos3, "Maria", "Pedro", "Susana", "Juan");

console.log(alumnos4);