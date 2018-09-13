let miFunccion = function(a) {
  return a;
}

let miFuncionF = a => a;

console.log(miFunccion("Hola"));
console.log(miFunccion("Flecha"));

let miFunccion2 = function(a:number, b:number) {
  return a + b;
}

let miFunccion2F = (a:number, b:number) => a + b;

console.log(miFunccion2(4, 5));
console.log(miFunccion2F(1, 3));

let miFunccion3 = function(nombre:string) {
  let nombre2 = nombre.toUpperCase();

  return nombre2;
}

let miFunccion3F = (nombre:string) => {
  let nombre2 = nombre.toUpperCase();
  return nombre2;
}

console.log(miFunccion3("Ander"));
console.log(miFunccion3F("Karmele"));

let hulk = {
  nombre: "Hulk",
  smash() {
    setTimeout(() => console.log(this.nombre + " smash!"), 1500);
  }
}

hulk.smash();
