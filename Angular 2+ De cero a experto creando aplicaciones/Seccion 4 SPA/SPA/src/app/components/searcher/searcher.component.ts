import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  heroes:Heroe[] = [];
  keywords:string;

  constructor(private _heroesService:HeroesService,
              private router:Router,
              private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['keywords']);
      this.keywords = params['keywords'];
      this.heroes = this._heroesService.searchHeroes(this.keywords);
    })
  }

  verHeroe(idx:number) {
    this.router.navigate(['/heroe', idx]);
  }

}
