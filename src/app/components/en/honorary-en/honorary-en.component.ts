import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-honorary-en',
  templateUrl: './honorary-en.component.html',
  styleUrls: ['./honorary-en.component.scss']
})
export class HonoraryEnComponent implements OnInit {

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
