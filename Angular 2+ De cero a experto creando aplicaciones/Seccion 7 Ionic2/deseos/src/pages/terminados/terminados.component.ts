import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { DetalleComponent } from '../detalle/detalle.component';
import { Lista } from '../../app/clases/index';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent implements OnInit {
  mostrarTodos:boolean;

  constructor(private navCrtl:NavController, private _listaDeseos:ListaDeseosService) {
    this.mostrarTodos = false;
  }

  ngOnInit() {}


    verDetalle(lista:Lista, idx:number) {
      this.navCrtl.push(DetalleComponent, {lista, idx});
    }
}
