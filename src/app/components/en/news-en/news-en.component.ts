import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news-en',
  templateUrl: './news-en.component.html',
  styleUrls: ['./news-en.component.scss']
})
export class NewsEnComponent implements OnInit {

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
