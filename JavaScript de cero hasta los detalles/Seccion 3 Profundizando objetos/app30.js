var a = new String("Fernando Herrera");
console.log(a);
console.log(a[0]);
console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf("e");
console.log("La letra: " + i);

console.log(a.indexOf("n"));
console.log(a.lastIndexOf("n"));

console.log(a.indexOf("Herrera"));

console.log(a.sub());
console.log(a.substr(2));
console.log(a.substr(2, 5));
console.log(a.substring(2));
console.log(a.substring(2, 5));
console.log(a.substring(0, a.indexOf(" ")));

var b = "Juan Carlos Pineda Chacon";
console.log(b);
console.log(b[0]);

var split = b.split(" ");
console.log(split);
console.log(split.length);

document.write(b.italics());

console.log(b.blink());
console.log(b.strike());
console.log(b.bold());
console.log(b.fontcolor("red"));