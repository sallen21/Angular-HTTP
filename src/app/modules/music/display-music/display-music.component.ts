import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Music } from 'src/app/shared/models/music';

@Component({
  selector: 'app-display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css']
})
export class DisplayMusicComponent implements OnInit {
  public music: Music[];
  private musicRoute= 'http://localhost:3000/music'

  constructor(private http: HttpClient) { }
  getMusic() {
    this.http.get<Music[]>(this.musicRoute).subscribe(music => {
      this.music = music;
      console.log('music', this.music)
    });
  }

  ngOnInit() {
    this.getMusic();
  }

}
