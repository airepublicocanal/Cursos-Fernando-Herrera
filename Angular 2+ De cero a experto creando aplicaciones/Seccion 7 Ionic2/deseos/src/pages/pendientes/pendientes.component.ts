import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { Lista } from '../../app/clases/index';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private navCrtl:NavController, private _listaDeseos:ListaDeseosService) {

  }

  ngOnInit() {}

  irAgregar() {
    this.navCrtl.push(AgregarComponent);
  }

  verDetalle(lista:Lista, idx:number) {
    this.navCrtl.push(DetalleComponent, {lista, idx});
  }
}
