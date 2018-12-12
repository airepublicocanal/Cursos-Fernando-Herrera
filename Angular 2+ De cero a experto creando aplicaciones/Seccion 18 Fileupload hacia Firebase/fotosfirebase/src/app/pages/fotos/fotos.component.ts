import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import {
  CargaImagenesService,
  Item
} from '../../services/carga-imagenes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  items: Observable<Item[]>;

  constructor(public _cargaImagenes: CargaImagenesService) {
    this.items = this._cargaImagenes.descargarImagenesFirebase();
  }

  ngOnInit() {}
}
