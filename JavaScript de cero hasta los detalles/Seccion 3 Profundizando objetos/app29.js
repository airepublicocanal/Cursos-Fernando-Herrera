console.log(true);
console.log(false);
console.log(new Boolean());
console.log(new Boolean(""));
console.log(new Boolean("-1"));
console.log(new Boolean("-2"));
console.log(new Boolean("-0"));
console.log(new Boolean("0"));
console.log(new Boolean("false"));
console.log(new Boolean(1));
console.log(new Boolean(2));
console.log(new Boolean(0));
console.log(new Boolean(-0));
console.log(new Boolean(NaN));
console.log(new Boolean(null));
console.log(new Boolean(Infinity));
console.log(new Boolean(-Infinity));

var a = new Boolean();
var b = false;
console.log(a.valueOf());

if (true) {
    console.log("Me imprimi True !!");
}

if (a) {
    console.log("Me imprimi a !!");
}

if (b) {
    console.log("Me imprimi b !!");
}

if (a.valueOf()) {
    console.log("Me imprimi a.valueOf !!");
}