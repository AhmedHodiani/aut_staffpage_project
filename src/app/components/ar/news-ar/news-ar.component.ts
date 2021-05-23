import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news-ar',
  templateUrl: './news-ar.component.html',
  styleUrls: ['./news-ar.component.scss']
})
export class NewsArComponent implements OnInit {

  news: any;


  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getNews();
  }



  getNews() {
    this._apiService.GetNewsPage()
      .subscribe(
        data => {
          this.news = data;
        },
        error => {
          console.log(error);
        })
  }

}
