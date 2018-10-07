var funciones = [];

for (var i = 0; i <= 10; i++) {
    funciones.push(function() {
        console.log(i);
    });
}

funciones.forEach(function(f) {
    f();
});
console.log("---------------------------------");
funciones = [];

//ES5
for (var i = 0; i <= 10; i++) {
    funciones.push(
        (function(valor) {
            return function() {
                console.log(valor);
            }
        })(i)
    );
}

funciones.forEach(function(f) {
    f();
});
console.log("---------------------------------");

funciones = [];

//ES6
for (let i = 0; i <= 10; i++) {
    funciones.push(function() {
        console.log(i);
    });
}

funciones.forEach(function(f) {
    f();
});