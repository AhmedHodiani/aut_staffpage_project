import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-alumni-en',
  templateUrl: './alumni-en.component.html',
  styleUrls: ['./alumni-en.component.scss']
})
export class AlumniEnComponent implements OnInit {
  albums: any;
  pictures: any;

  selected: any;
  selectedAlbum: string;

  flipedBook: any;

  

  player: YT.Player;
  public id: string;


  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getAlumniGallaryList()
      .subscribe(
        data => {
          this.albums = data;
          this.pictures = data[0].images
          this.selectedAlbum = data[0]['album_english']
        }
      )

      this.getFlipedBook();
      this.getAlumniVideo();
  }

  
  getImages(id) {
    let album = this.albums.find(element => element.id == id);
    this.pictures = album.images;
    this.selectedAlbum = album.album_english;
  }

  getFlipedBook() {
    this._apiService.getAlumniFlipedBook()
      .subscribe(
        data => {
          this.flipedBook = data[0]
        }
      )
  }

  getAlumniVideo() {
    this._apiService.getAlumniVideo()
      .subscribe(
        data => {
          this.id = data[0]['youtube_video_id']
        }
      )
  }
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
