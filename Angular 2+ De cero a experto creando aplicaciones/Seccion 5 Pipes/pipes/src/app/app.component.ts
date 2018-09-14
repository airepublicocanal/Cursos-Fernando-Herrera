import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';

  name:string = "Ander";
  name2:string = "anDer cadaVal FeijOo";
  array:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  PI:number = Math.PI;
  percent:number = 0.234;

  salary:number = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  };

  promiseValue = new Promise( (resolve, reject) => {
      setTimeout(() => resolve('Llego la data!'), 3500);
  });

  date:Date = new Date();

  video:string = "zBJ6PjInNes";

  activatePassword:boolean = true;
}
