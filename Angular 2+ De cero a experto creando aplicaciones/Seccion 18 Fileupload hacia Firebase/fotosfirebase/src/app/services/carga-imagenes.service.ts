import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileItem } from '../models/file-item';
import { Observable } from 'rxjs';

import * as firebase from 'firebase';

export interface Item {
  nombre: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {
  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) {}

  public descargarImagenesFirebase(): Observable<Item[]> {
    return this.db.collection<Item>(this.CARPETA_IMAGENES).valueChanges();
  }

  public cargarImagenesFirebase(imagenes: FileItem[]) {
    console.log('cargarImagenesFirebase');
    const storageRef = firebase.storage().ref();

    for (const item of imagenes) {
      item.estaSubiendo = true;

      if (item.progreso >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
        .put(item.archivo);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => {
          item.progreso =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(item.progreso);
        },
        error => console.error('Error al subir', error),
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log('Imagen cargada correctamente', downloadURL);
            item.url = downloadURL;
            item.estaSubiendo = false;
            this.guardarImagen({ nombre: item.nombreArchivo, url: item.url });
          });
        }
      );
    }
  }

  private guardarImagen(imagen: Item) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
}
