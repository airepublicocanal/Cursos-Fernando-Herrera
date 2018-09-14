import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keywords:string = "";

  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  searchArtists() {
    if ("" != this.keywords) {
      this._spotifyService.getArtists(this.keywords)
        .subscribe();
      }
  }
}
