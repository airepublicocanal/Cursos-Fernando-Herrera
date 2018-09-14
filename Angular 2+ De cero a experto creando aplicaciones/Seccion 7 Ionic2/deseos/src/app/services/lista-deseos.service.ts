import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas:Lista[] = [];

  constructor() {

    this.loadData();

    console.log("servicio inicializado");
  }

  updateData() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  loadData() {
    let data = localStorage.getItem("data");

    if (data != null) {
      this.listas = JSON.parse(data);
    }
  }

  addLista(lista:Lista) {
    this.listas.push(lista);

    this.updateData();
  }

  deleteLista(idx:number) {
    this.listas.splice(idx, 1);

    this.updateData();
  }
}
