import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private token = 'BQAhJDgqi63r_RfVW-11FGb6vOerWqVH2muavvqIAn9h0KeQUvf8nDMgohLtpIpGB12uDgHrd0vWoRE-O0c';
  private authorization = 'Bearer';

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
                .pipe(map(data => data['albums'].items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }

  private getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': `${this.authorization} ${this.token}`,
    });

    return this.http.get(url, {headers});
  }
}
