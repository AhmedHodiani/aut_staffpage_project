import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CentersService } from 'src/app/services/centers.service';

@Component({
  selector: 'app-staffpage-ar',
  templateUrl: './staffpage-ar.component.html',
  styleUrls: ['./staffpage-ar.component.scss']
})
export class StaffpageArComponent implements OnInit {


  staffPage: any;

  constructor(private _route: ActivatedRoute, private router: Router, private _apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getStaffPage(this._route.snapshot.paramMap.get('url'))
  }

  getStaffPage(url) {
    this._apiService.getStaffPageForUsers(url)
    .subscribe(
      data => {
        this.staffPage = data;
        console.log(data);
      },
      error => {
        console.log(error);
      })
  }
}
