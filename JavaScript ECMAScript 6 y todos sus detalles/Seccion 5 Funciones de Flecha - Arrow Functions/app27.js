let restar = (a, b) => a - b;

console.log(typeof restar);
console.log(restar instanceof Function);

//No se puede hacer new
//let restar2 = new restar(1, 2);
let restar2 = restar(1, 2);
console.log(restar2);

//Asi no tiene arguments dentro
/*
((a, b) => {
    console.log(arguments[0]);
})();
*/

function ejemplo(x, y) {
    ((a, b) => {
        console.log(arguments[0]);
    })();
}

ejemplo(10, 20);