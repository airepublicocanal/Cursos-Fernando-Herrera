let frutas = ["banano", "pera", "uva"];
console.log(frutas);

let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);

let [, , fruta3] = frutas;
console.log(fruta3);

let otraFruta = "manzana";
[otraFruta] = frutas;
console.log(otraFruta);

//ES5
let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

console.log(a, b);

//ES6
let c = 1;
let d = 2;
[c, d] = [d, c];
console.log(c, d);

let arrObj = [{ a: 4, b: 7 }, { c: 10, d: 6 }];
console.log(arrObj);

let [obj1, obj2] = arrObj;
console.log(obj1, obj2);

let [{ a: objA }, { d: objD }] = arrObj;
console.log(objA, objD);