import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CentersService } from 'src/app/services/centers.service';

@Component({
  selector: 'app-centers-en',
  templateUrl: './centers-en.component.html',
  styleUrls: ['./centers-en.component.scss']
})
export class CentersEnComponent implements OnInit {

  center: any;
  journalUrl: any;
  flipedBook: any;
  constructor(private _route: ActivatedRoute, private _centersService: CentersService, private router: Router, private _apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getCenter(this._route.snapshot.paramMap.get('center'))
    this.getJournal();
    this.getFlipedBook();
  }

  public getCenter(center) {
    this._centersService.getCenter(center)
      .subscribe(
        data => {
          this.center = data;
          console.log(data);
        },
        error => {
          console.log(error);
        })
  }

  getJournal() {
    this._apiService.getJournal()
      .subscribe(
        data => {
          this.journalUrl = data[0].pdf_url
        }
      )
  }

  getFlipedBook() {
    this._apiService.getFlipedBook()
      .subscribe(
        data => {
          this.flipedBook = data[0]
        }
      )
  }

}
