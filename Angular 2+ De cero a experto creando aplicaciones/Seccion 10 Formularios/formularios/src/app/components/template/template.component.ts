import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: null,
    sexo: "Hombre",
    acepta: false
  }

  paises:Object[] = [{
    codigo:"FR",
    nombre:"Francia"
  },
  {
    codigo:"EN",
    nombre:"Inglaterra"
  },
  {
    codigo:"US",
    nombre:"Estados Unidos"
  }]

  sexos:string[] = ["Hombre", "Mujer", "Sin definir"];

  constructor() {

  }

  ngOnInit() {
  }

  guardar(forma:NgForm) {
      console.log("Submit realizado");
      console.log("ngForm: ", forma);
      console.log("Valor Form: ", forma.value);
      console.log("Valor Nombre: ", forma.value.nombre);
      console.log("Usuario", this.usuario);
  }
}
