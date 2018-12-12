import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPlayList } from '../interfaces/play-list.interface';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyBbrJVldnCjRPZhOmOTl8GoZTEaAYxKF1M';
  private playlist = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(public http: HttpClient) {}

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;
    let params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playlist)
      .set('key', this.apiKey);

    if (this.nextPageToken) {
      params = params.set('pageToken', this.nextPageToken);
    }

    console.log(params);
    return this.http
      .get(url, {
        params
      })
      .pipe(
        map((res: IPlayList) => {
          console.log(res);
          this.nextPageToken = res.nextPageToken;

          const videos: any[] = [];
          res.items.forEach(video => videos.push(video.snippet));

          return videos;
        })
      );
  }
}
