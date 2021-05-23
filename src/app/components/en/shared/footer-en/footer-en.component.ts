import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentersService } from 'src/app/services/centers.service';
import { CollegesService } from 'src/app/services/colleges.service';
import { CollegesEnComponent } from '../../colleges-en/colleges-en.component';

@Component({
  selector: 'app-footer-en',
  templateUrl: './footer-en.component.html',
  styleUrls: ['./footer-en.component.scss']
})
export class FooterEnComponent implements OnInit {
  colleges: any;

  constructor(public _router: Router, private _route: ActivatedRoute, private _centersService: CentersService, private _collegesService: CollegesService, private _collegesEnComponent: CollegesEnComponent) { }

  ngOnInit(): void {
    this.getHomeColleges();
  }

  getHomeColleges() {
    this._collegesService.getColleges()
      .subscribe(
        data => {
          this.colleges = data;
        },
        error => {
          console.log(error);
        })
  }
  onClick(college) {
    this._collegesEnComponent.getCollege(college)
  }
}
