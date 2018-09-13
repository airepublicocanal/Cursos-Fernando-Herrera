class Avenger {
  nombre:string;
  equipo:string;
  nombreReal:string;
  puedePelear:boolean;
  peleasGanadas:number;

  constructor(nombre:string, equipo:string, nombreReal:string) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
    this.puedePelear = false;
    this.peleasGanadas = 0;
  }
}

let antman:Avenger = new Avenger("Ant-Man", "Capitan America", "Scott Lang");

console.log(antman);
