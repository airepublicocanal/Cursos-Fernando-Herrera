import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { DeseosService } from '../../providers/deseos.service';
import { Lista, ListaItem } from '../../models';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage {

    lista: Lista;
    nombreItem: string = '';

    constructor(public deseosService: DeseosService, private navParams: NavParams) {
        const titulo = this.navParams.get('titulo');

        if (this.navParams.get('lista')) {
            this.lista = this.navParams.get('lista');
        } else {
            this.lista = new Lista(titulo);
            this.deseosService.agregarLista(this.lista);
        }

        console.log(this.lista);
    }

    agregarItem() {
        if(this.nombreItem.length === 0) {
            return;
        }

        const item = new ListaItem(this.nombreItem);

        this.lista.items.push(item);

        this.deseosService.guardarStorage();

        this.nombreItem = '';
    }

    actualizarTarea(item: ListaItem) {
        item.completado = !item.completado;

        const pendientes = this.lista.items.filter(itemData => !itemData.completado).length;

        if (pendientes === 0) {
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        } else {
            this.lista.terminada = false;
            this.lista.terminadaEn = undefined;
        }

        this.deseosService.guardarStorage();
    }

    borrarTarea(index: number) {
        this.lista.items.splice(index, 1);

        this.deseosService.guardarStorage();
    }
}