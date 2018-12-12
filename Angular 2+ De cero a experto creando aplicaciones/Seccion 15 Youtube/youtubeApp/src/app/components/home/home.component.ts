import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { ISnippet } from '../../interfaces/play-list.interface';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: ISnippet[] = [];
  videoSel: ISnippet;

  constructor(public youtubeService: YoutubeService) {
    this.youtubeService.getVideos().subscribe(videos => (this.videos = videos));
  }

  ngOnInit() {}

  verVideo(video: ISnippet) {
    this.videoSel = video;

    $('#exampleModal').modal();
  }

  cerrarModal() {
    this.videoSel = null;

    $('#exampleModal').modal('hide');
  }

  cargasMas() {
    this.youtubeService
      .getVideos()
      .subscribe(videos => this.videos.push.apply(this.videos, videos));
  }
}
