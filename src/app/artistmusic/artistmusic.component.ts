import { Component, OnInit } from '@angular/core';
import {ALBUMS} from '../mock-albums';
import { AlbumService} from '../album.service';

@Component({
  selector: 'app-artistmusic',
  templateUrl: './artistmusic.component.html',
  styleUrls: ['./artistmusic.component.css']
})
export class ArtistmusicComponent implements OnInit {

  albums = ALBUMS;
  

  constructor(private albumService: AlbumService) { }

  ngOnInit() {

    
  }
  getAlbums(): void {
    
    this.albumService.getAlbums().subscribe(albums => this.albums = albums)
  }

  playaudio(): void {
    let audio = new Audio();
    audio.src = "../songs/acidrain.mp3";
    audio.load();
    audio.play();
  }
 
  
}
