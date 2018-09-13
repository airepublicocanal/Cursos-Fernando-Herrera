let capitanAmerica = {
  fullName: "Steven",
  clave: "Capitan America",
  poder: "Droga"
}
/*
let fullName:string = avenger.nombre;
let clave:string = avenger.clave;
let poder:string = avenger.poder;
*/

let {fullName, poder, clave} = capitanAmerica;

console.log(`${fullName} ${clave} ${poder}`);

let avengers:string[] = ["Thor", "Steve", "Tony", "Peter"];

let [thor, capi, ironman] = avengers;

console.log(`${thor} ${capi} ${ironman}`)

let [, , , spidy] = avengers;

console.log(`${spidy}`)
