let items = new Set([1, 2, 3, 4, 5]);
console.log(items.size);
console.log(items);

items.delete(3);
console.log(items.size);
console.log(items);

items.delete(3);
console.log(items.size);
console.log(items);

items.clear();
console.log(items.size);
console.log(items);