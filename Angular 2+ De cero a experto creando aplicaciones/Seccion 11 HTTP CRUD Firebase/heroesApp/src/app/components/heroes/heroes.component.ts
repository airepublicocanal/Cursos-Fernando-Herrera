import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  loaded:boolean = false;

  constructor(private _heroesService:HeroesService) {
    this._heroesService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
        this.loaded = true;
      });
  }

  ngOnInit() {
  }

  borrarHeroe(key$:string) {
    this._heroesService.borrarHeroe(key$)
      .subscribe(respuesta => {
        if (respuesta) {
          console.error(respuesta);
        } else {
          //todo bien
          delete this.heroes[key$];
        }
      });
  }

}
