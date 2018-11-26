import { Component, Input } from '@angular/core';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { DeseosService } from '../providers/deseos.service';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { Lista } from '../models';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})
export class ListasComponent {
    
    @Input() terminada: boolean = false;

    constructor(public deseosService: DeseosService, private navCrtl: NavController, private alertCrtl: AlertController) {
    }

    listaSeleccionada(lista: Lista) {
        console.log(lista);
        this.navCrtl.push(AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
    }

    editarLista(lista: Lista, slidingItem: ItemSliding) {
        slidingItem.close();

        const alerta  = this.alertCrtl.create({
            title: 'Editar nombre',
            message: 'Editar el nombre de la lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista',
                value: lista.titulo
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Guardar',
                handler: data => {
                  console.log(data);
                  if (data.titulo.length === 0) {
                    return;
                  }

                  lista.titulo = data.titulo;
                  this.deseosService.guardarStorage();
                }
            }]
        });

        alerta.present();
    }

    borrarLista(lista: Lista) {
        this.deseosService.borrarLista(lista);
    }
}

