import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-news-details-en',
  templateUrl: './news-details-en.component.html',
  styleUrls: ['./news-details-en.component.scss']
})
export class NewsDetailsEnComponent implements OnInit {
  news: any;

  constructor(private _route: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getNews(this._route.snapshot.paramMap.get('id'))
  }

  public getNews(id) {
    this._apiService.getNewsDetails(id)
      .subscribe(
        data => {
          this.news = data;
          console.log(data);
        },
        error => {
          console.log(error);
        })
  }

}
