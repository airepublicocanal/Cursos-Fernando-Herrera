import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:Lista

  constructor(public alertCtrl:AlertController,
    public navCtrl:NavController,
    public navParams:NavParams,
    public _listaDeseos:ListaDeseosService) {

    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");
  }

  ngOnInit() {}

  actualizarItem(item:ListaItem) {
    item.completado = !item.completado;

    let todosMarcados:boolean = true;

    for(let item of this.lista.items) {
      if (!item.completado) {
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;

    this._listaDeseos.updateData();
  }

  borrarLista() {
    let alert = this.alertCtrl.create({
      title: this.lista.nombre,
      subTitle: `¿Está seguro que desea eliminar la lista ${this.lista.nombre}?`,
      buttons: ["Cancelar", {
        text:"Eliminar",
        handler: () => {
          this._listaDeseos.deleteLista(this.idx);

          this.navCtrl.pop();
        }
      }]
    });

    alert.present();
  }
}
