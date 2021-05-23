import { Component, OnInit } from '@angular/core';
import { CollegesService } from 'src/app/services/colleges.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CentersService } from 'src/app/services/centers.service';
import { ApiService } from 'src/app/services/api.service';

// import { CentersEnComponent } from '../../centers-en/centers-en.component';

@Component({
  selector: 'app-navbar-en',
  templateUrl: './navbar-en.component.html',
  styleUrls: ['./navbar-en.component.scss']
})
export class NavbarEnComponent implements OnInit {
  colleges: any;
  centers: any;
  senates: any;


  constructor(private _apiService: ApiService, private _route: ActivatedRoute, public _router: Router, private _collegesService: CollegesService, private _centersService: CentersService) { }

  ngOnInit(): void {
    this.getHomeColleges();
    this.getHomeCenters();
    this.GetHomeSenates();
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

  getHomeCenters() {
    this._centersService.getCenters()
      .subscribe(
        data => {
          this.centers = data
          
        },
        error => {
          console.log(error);
        })
  }

  GetHomeSenates() {
    this._apiService.GetHomeSenates()
      .subscribe(
        data => {
          this.senates = data
        },
        error => {
          console.log(error);
        })
  }

  onCollegeClick(college) {
    this._router.navigateByUrl(`/en/colleges/${college}`).then(() => window.location.reload())
  }

  onCenterClick(center) {
    this._router.navigateByUrl(`/en/centers/${center}`).then(() => window.location.reload())
  }

  onLanguageChange() {
      this._router.navigateByUrl(`/ar`).then(() => window.location.reload())
  }

  onSenateClick(council) {
    this._router.navigateByUrl(`/en/councils/${council}`).then(() => window.location.reload());
  }
}
