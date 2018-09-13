for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log("----------------------------");

for (var i = 0; i < 10; i += 2) {
    console.log(i);
}

console.log("----------------------------");

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

console.log("----------------------------");

for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log(i);
}


var Persona = function() {
    this.nombre = "Juan";
    this.apellido = "Pineda";
    this.edad = 18;
}

var juan = new Persona();

console.log(juan);

Persona.prototype.direccion = "San Jose";

for (prop in juan) {
    console.log(prop, ":", juan[prop]);
}

console.log("----------------------------");

for (prop in juan) {
    console.log(juan.hasOwnProperty(prop));
    console.log(prop, ":", juan[prop]);
}

console.log("----------------------------");

for (prop in juan) {
    if (!juan.hasOwnProperty(prop)) {
        continue;
    }
    console.log(prop, ":", juan[prop]);
}

console.log("----------------------------");

for (num in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    console.log(num);
}

console.log("----------------------------");

[1, 2, 3, 4, 5, true, 7, false, 9, "nombre"].forEach(function(val) {
    console.log(val)
});