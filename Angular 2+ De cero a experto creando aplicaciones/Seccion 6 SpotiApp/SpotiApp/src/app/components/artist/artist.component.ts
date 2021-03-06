import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist:any[] = [];
  topTracks:any[] = [];

  constructor(private activatedRoute:ActivatedRoute, private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe(id => {
          console.log(id);
          this._spotifyService.getArtist(id)
            .subscribe(data => this.artist = data);

            this._spotifyService.getArtistTopTracks(id, "ES")
              .subscribe(data => this.topTracks = data);
      });
  }

}
