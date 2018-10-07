//ES5
var arreglo = [5, 10, 11, 2, 1, 9, 20];
console.log(arreglo);

var ordenado = arreglo.sort(function(a, b) {
    return a - b;
});
console.log(ordenado);

//ES6
let arreglo2 = [5, 10, 11, 2, 1, 9, 20];
console.log(arreglo2);

let ordenado2 = arreglo2.sort((a, b) => a - b);
console.log(ordenado2);