import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../providers/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  keywords:string = "";

  peliculas: Pelicula[];

  constructor(private _ps: PeliculasService,
              private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['keywords']);
      if (params['keywords']) {
        this.keywords = params['keywords'];
      }
    })
  }

  ngOnInit() {
  }

  search() {
    console.log("search:  " + this.keywords);
    if (0 == this.keywords.length) {
      return;
    }

    this._ps.buscarPelicula(this.keywords)
      .subscribe(data => {
        console.log(data);
        this.peliculas = data;
      });
  }
}
