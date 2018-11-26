import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DeseosService } from '../../providers/deseos.service';
import { AgregarPage } from '../agregar/agregar.component';
import { Lista } from '../../models';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

    constructor(public deseosService: DeseosService, private navCrtl: NavController, private alertCrtl: AlertController) {
    }

    listaSeleccionada(lista: Lista) {
        console.log(lista);
        this.navCrtl.push(AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
    }

    agregarLista() {
        const alerta  = this.alertCrtl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista que desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Agregar',
                handler: data => {
                  console.log(data);
                  if (data.titulo.length === 0) {
                    return;
                  }

                  this.navCrtl.push(AgregarPage, {
                      titulo: data.titulo
                  });
                }
            }]
        });

        alerta.present();
    }

    borrarLista(lista: Lista) {
        this.deseosService.borrarLista(lista);
    }
}