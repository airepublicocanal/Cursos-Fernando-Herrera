let numeros = [1, 2, 3, 4, 5, 6, 7];

let setNumeros = new Set(numeros);
console.log(setNumeros);

let arrayNumeros = [...setNumeros];
console.log(arrayNumeros);

function eliminaDuplicados(items) {
    return [...new Set(items)];
}

let numeros2 = [1, 2, 2, 3, 4, 5, 5, 6, 7, 1, 4, 3, 7, 2, 2];
console.log(numeros2);

console.log(eliminaDuplicados(numeros2));