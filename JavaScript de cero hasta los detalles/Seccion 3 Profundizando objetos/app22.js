var array = [5, 4, 3, 2, 1];

console.log(array);
console.log(array[2], array[1], array[5]);
console.log(array.toString());

array.reverse();
console.log(array);

array = array.map(function(elem) {
    elem *= elem;
    return elem;
});
console.log(array);

array = array.map(Math.sqrt);
console.log(array);

//Por defecto si no se pone nada es ","
array = array.join("|");
console.log(array);

array = array.split("|");
console.log(array);

array.push("6");
console.log(array);

array.unshift("0");
console.log(array);

var elimine = array.pop();
console.log(array, elimine);

//param1: posicion de inicio. param2: cuantos elementos, param3..N: elementos nuevos que añade
array.splice(1, 0, "10", "20");
console.log(array);

//param1: posicion de inicio. param2: posicion final
array = array.slice(2, 4);
console.log(array);