import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-presidency-ar',
  templateUrl: './presidency-ar.component.html',
  styleUrls: ['./presidency-ar.component.scss']
})
export class PresidencyArComponent implements OnInit {

  president: any;
  staff: any;
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getStaff();
    this.getPresident();
  }

  getStaff() {
    this._apiService.getStaff()
      .subscribe(
        data => {
          this.staff = data
        });
  }
  
  getPresident() {
    this._apiService.getPresident()
      .subscribe(
        data => {
          this.president = data[0]
        });
  }
}