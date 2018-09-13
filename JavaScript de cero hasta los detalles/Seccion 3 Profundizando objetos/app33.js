console.log(window.Math);

var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num1 = 10.556789;
console.log(num1);

console.log(Math.round(num1));
console.log(Math.round(num1 * 100) / 100);

console.log(Math.floor(num1));
console.log(Math.random());

function randomEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomEntre(1, 6));

console.log(Math.sqrt(11));
console.log(Math.sqrt(49));

console.log(Math.pow(5, 2));
console.log(Math.pow(5, 3));