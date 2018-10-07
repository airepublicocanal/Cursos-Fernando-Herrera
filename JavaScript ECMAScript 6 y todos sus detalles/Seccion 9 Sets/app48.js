let items = new Set();
console.log(items);

items.add(10);
items.add(11);
items.add(8);
items.add(7);
items.add(7);
items.add("7");
items.add("7");

console.log(items);
console.log(items.size);

let items2 = new Set([1, 2, 3, 4, 5, 6, 7, 7]);
console.log(items2);
console.log(items2.size);

console.log(items2.has(7));
console.log(items2.has("7"));