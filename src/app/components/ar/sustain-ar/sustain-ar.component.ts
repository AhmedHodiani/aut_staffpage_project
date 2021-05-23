import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sustain-ar',
  templateUrl: './sustain-ar.component.html',
  styleUrls: ['./sustain-ar.component.scss']
})
export class SustainArComponent implements OnInit {
  html: any;
  mainImage: any;
  pictures: any;

  selected: any;

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this._apiService.getSustainHtml().subscribe(data => {
      this.html = data;
    })

    this._apiService.getMainImage().subscribe(data => {
      this.mainImage = data;
    })

    this._apiService.getSustainImages()
      .subscribe(
        data => {
          this.pictures = data;
        }
      )
  }

}
