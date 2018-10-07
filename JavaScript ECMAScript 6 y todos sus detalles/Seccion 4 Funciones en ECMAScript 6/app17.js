var num1 = 10;
var num2 = 30;
var max = Math.max(num1, num2);
console.log(max);

//ES5
var numeros = [1, 2, 5, 10, 20, 100, 234];
max = Math.max.apply(Math, numeros);
console.log(max);

//ES6
max = Math.max(...numeros);
console.log(max);