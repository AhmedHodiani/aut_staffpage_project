import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-students-ar',
  templateUrl: './students-ar.component.html',
  styleUrls: ['./students-ar.component.scss']
})
export class StudentsArComponent implements OnInit {

  library: any;
  sports: any;
  buildings: any;

  courseSchedule: any;
  examsSchedule: any;

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.GetLibrarySlider();
    this.GetSportsSlider();
    this.GetAccommodationsSlider();

    this.getCourseSchedule();
    this.getExamsSchedule();
  }

  getCourseSchedule() {
    this._apiService.getCourseSchedule()
      .subscribe(
        data => {
          this.courseSchedule = data[0].pdf_url
        }
      )
  }

  getExamsSchedule() {
    this._apiService.getExamsSchedule()
      .subscribe(
        data => {
          this.examsSchedule = data[0].pdf_url
        }
      )
  }


  GetLibrarySlider() {
    this._apiService.GetLibrarySlider()
      .subscribe(data => this.library = data)
  };

  GetSportsSlider() {
    this._apiService.GetSportsSlider()
      .subscribe(data => this.sports = data)
  };

  GetAccommodationsSlider() {
    this._apiService.GetAccommodationsSlider()
      .subscribe(data => this.buildings = data)
  };

}
