let userID = Symbol.for("userID");
let objeto = {};

objeto[userID] = "12345";

console.log(objeto[userID]);
console.log(userID);

let userID2 = Symbol.for("userID");

console.log(userID == userID2);
console.log(userID === userID2);
console.log(Object.is(userID, userID2));

console.log(objeto[userID2]);
console.log(userID2);

let id = Symbol.for("id unico");
console.log(Symbol.keyFor(id));

let id2 = Symbol.for("id unico");
console.log(Symbol.keyFor(id2));

console.log(id === id2);

let id3 = Symbol("id unico");
console.log(Symbol.keyFor(id3));