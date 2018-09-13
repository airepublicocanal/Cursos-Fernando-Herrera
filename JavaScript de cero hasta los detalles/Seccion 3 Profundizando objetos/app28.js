var a = 10.456789;
var b = new Number(10);

console.log(a);
console.log(b);
console.log(a == b);
console.log(a === b);

console.log(a.toFixed(2));
console.log(a.toFixed(4));
console.log(a.toFixed(5));
console.log(a.toFixed(10));
console.log(a.toFixed(15));
console.log(a.toFixed(20));
console.log(a.toFixed(50));

var c = a.toString();
console.log(c);

console.log(a.toPrecision(1));
console.log(a.toPrecision(2));
console.log(a.toPrecision(4));

var d =  a * 1000000000000000000000000000000000;
d *= 1000000000000000000000000000000000;
d *= 1000000000000000000000000000000000;
d *= 1000000000000000000000000000000000;
d *= 1000000000000000000000000000000000;
d *= 1000000000000000000000000000000000;
d *= 1000000000000000000000000000000000;
d *= 1000000000000000000000000000000000;
d *= 1000000000000000000000000000000000;
console.log(d);
d *= 1000000000000000000000000000000000;
console.log(d);

d *= -1000000000000000000000000000000000;
console.log(d);

console.log(a * "f");

var e = new Number("20");
console.log(e);
console.log(e.valueOf());

var f = new Number("20f");
console.log(f);
console.log(f.valueOf());