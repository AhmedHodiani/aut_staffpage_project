import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegesService } from 'src/app/services/colleges.service';

@Component({
  selector: 'app-colleges-ar',
  templateUrl: './colleges-ar.component.html',
  styleUrls: ['./colleges-ar.component.scss']
})
export class CollegesArComponent implements OnInit {

  college: any;
  selectedStaff: any;
  selectedPlan: any;

  staffs: any;
  plans: any;
  constructor(private _route: ActivatedRoute, private _collegesService: CollegesService) { }

  ngOnInit(): void {
    this.getCollege(this._route.snapshot.paramMap.get('college'))
  }

  public getCollege(college) {
    this._collegesService.getCollege(college)
      .subscribe(
        data => {
          this.college = data;
          this.staffs = data['departments'][0].staffs;
          this.plans = data['departments'][0].plans;
          this.selectedStaff = data['departments'][0]['department_arabic'];
          this.selectedPlan = data['departments'][0]['department_arabic'];
        },
        error => {
          console.log(error);
        })
  }

  getStaff(id) {
    let dep = this.college.departments.find(element => element.id == id);
    this.staffs = dep.staffs;
    this.selectedStaff = dep.department_arabic;
  }
  getAdministrativeStaff() {
    this.staffs = this.college.administrative_staffs;
    this.selectedStaff = 'الإدارة';
  }
  getPlan(id) {
    let dep = this.college.departments.find(element => element.id == id);
    this.plans = dep.plans;
    this.selectedPlan = dep.department_arabic;
  }

}
