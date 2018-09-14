import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/Rx';
import { Pelicula } from '../interfaces/pelicula.interface';

@Injectable()
export class PeliculasService {

  private apiKey: string = "f7e49967d109f0b333eba14f7e6d82b8";
  private urlMoviedb: string = "https://api.themoviedb.org/3"

  private peliculas:Pelicula[] = [];

  constructor(private jsonp: Jsonp) { }

  getCartelera() {
    let startDate: Date = new Date();
    let endDate: Date = new Date();

    endDate.setDate(endDate.getDate() + 7);

    let startDateString: string = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`
    let endDateString: string = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${startDateString}&primary_release_date.lte=${endDateString}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results);
  }

  getPopulares() {
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results);
  }

  getPopularesKids() {
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results);
  }

  buscarPelicula(texto: string) {
    let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => {
        this.peliculas = res.json().results;
        return res.json().results;
      });
  }

  getPelicula(movieId: string) {
    let url = `${this.urlMoviedb}/movie/${movieId}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }
}
