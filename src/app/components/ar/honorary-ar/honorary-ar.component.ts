import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-honorary-ar',
  templateUrl: './honorary-ar.component.html',
  styleUrls: ['./honorary-ar.component.scss']
})
export class HonoraryArComponent implements OnInit {

  years: any;
  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this._apiService.GetStudents()
      .subscribe(
        date => {
          this.years = date;
        }
      )
  }

}
