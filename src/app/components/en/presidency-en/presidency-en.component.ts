import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-presidency-en',
  templateUrl: './presidency-en.component.html',
  styleUrls: ['./presidency-en.component.scss']
})
export class PresidencyEnComponent implements OnInit {

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
