import {
  Component,
  OnInit
} from '@angular/core';
import {
  SpotifyService
} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mesageError: string;

  constructor(private spotyfyService: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotyfyService.getNewReleases().subscribe(data => {
      console.log(data);
      this.nuevasCanciones = data;

      this.loading = false;
      this.error = false;
    }, errorServicio => {
      this.mesageError = errorServicio.error.error.message;

      this.loading = false;
      this.error = true;
      console.log(errorServicio);
    });
  }

  ngOnInit() {}

}
