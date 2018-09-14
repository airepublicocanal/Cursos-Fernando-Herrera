import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculasCartelera: Pelicula[];
  peliculasPopulares: Pelicula[];
  peliculasPopularesKids: Pelicula[];

  constructor(private _ps: PeliculasService) {
    this._ps.getCartelera()
      .subscribe(data => {
        console.log(data);
        this.peliculasCartelera = data;
      });

    this._ps.getPopulares()
      .subscribe(data => {
        console.log(data);
        this.peliculasPopulares = data;
      });

    this._ps.getPopularesKids()
      .subscribe(data => {
        console.log(data);
        this.peliculasPopularesKids = data;
      });
  }

  ngOnInit() {
  }

}
