import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  authorizationToken:string = "BQCIkFUUara57C8-8lNJ5-JObao-fJvxm1qjzN309D_ZECmtE7nIvQWSCqQnD2_t9O7fILp0ILQcYYdv8_5xQQ";

  searchUrl:string = "https://api.spotify.com/v1/search";
  artistUrl:string = "https://api.spotify.com/v1/artists";
  artistTopTracksUrl:string = "https://api.spotify.com/v1/artists"
  artists:any[] = [];
  artist:any;
  topTracks:any[] = [];

  constructor(private http:Http) { }

  getArtists(keywords:string) {
    let headers = this.getHeaders();

    let query = `?q=${keywords}&type=artist`;
    let url = this.searchUrl + query;

    return this.http.get(url, {headers})
      .map(res => {
        this.artists = res.json().artists.items;
      });
  }

  getArtist(id:string) {
    let headers = this.getHeaders();

    let query = `/${id}`;
    let url = this.artistUrl + query;

    return this.http.get(url, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  getArtistTopTracks(id:string, country:string) {
    let headers = this.getHeaders();

    let query = `/${id}/top-tracks?country=${country}`;
    let url = this.artistTopTracksUrl + query;

    return this.http.get(url, {headers})
      .map(res => {
        console.log(res.json().tracks);
        return res.json().tracks;
      });
  }

  private getHeaders():Headers {
    let headers = new Headers();
    headers.append('authorization', `Bearer ${this.authorizationToken}`);

    return headers;
  }

}
