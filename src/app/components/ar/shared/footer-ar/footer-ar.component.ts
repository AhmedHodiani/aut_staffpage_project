import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentersService } from 'src/app/services/centers.service';
import { CollegesService } from 'src/app/services/colleges.service';
import { CollegesArComponent } from '../../colleges-ar/colleges-ar.component';

@Component({
  selector: 'app-footer-ar',
  templateUrl: './footer-ar.component.html',
  styleUrls: ['./footer-ar.component.scss']
})
export class FooterArComponent implements OnInit {
  colleges: any;

  constructor(public _router: Router, private _route: ActivatedRoute, private _centersService: CentersService, private _collegesService: CollegesService, private _collegesArComponent: CollegesArComponent) { }

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
    this._collegesArComponent.getCollege(college)
  }
}
