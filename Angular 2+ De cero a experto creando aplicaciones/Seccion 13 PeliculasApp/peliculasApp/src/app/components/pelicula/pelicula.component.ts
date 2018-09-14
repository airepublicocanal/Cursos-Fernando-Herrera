import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any = {};
  returnPath:string = "";
  busqueda:string = "";

  constructor(private _ps: PeliculasService,
    private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      console.log(params['returnPath']);

      this.returnPath = params['returnPath'];

      if (params['busqueda']) {
        console.log(params['busqueda']);
        this.busqueda = params['busqueda'];
      }

      this._ps.getPelicula(params['id'])
        .subscribe(data => {
          console.log(data);
          this.pelicula = data;
        });
    })
  }

  ngOnInit() {
  }
}
