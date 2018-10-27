import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  SpotifyService
} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.sass']
})
export class ArtistaComponent implements OnInit {

  loading: boolean;
  artista: any = {};
  topTracks: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {}

  getArtista(id: string) {
    this.spotifyService.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id) {
    this.spotifyService.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
