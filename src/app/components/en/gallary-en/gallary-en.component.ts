import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gallary-en',
  templateUrl: './gallary-en.component.html',
  styleUrls: ['./gallary-en.component.scss']
})
export class GallaryEnComponent implements OnInit {
  albums: any;
  pictures: any;

  selected: any;
  selectedAlbum: string;

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getGallaryList()
      .subscribe(
        data => {
          this.albums = data;
          this.pictures = data[0].images
          this.selectedAlbum = data[0]['album_english']
        }
      )
  }

  
  getImages(id) {
    let album = this.albums.find(element => element.id == id);
    this.pictures = album.images;
    this.selectedAlbum = album.album_english;
  }

}
