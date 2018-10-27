import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotyfyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);
    this.loading = true;

    this.spotyfyService.getArtistas(termino).subscribe(data => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }
}
