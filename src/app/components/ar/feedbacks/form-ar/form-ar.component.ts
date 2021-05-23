import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-ar',
  templateUrl: './form-ar.component.html',
  styleUrls: ['./form-ar.component.scss'],
})
export class FormArComponent implements OnInit {
  title: string;

  // type_choices_english = [
  //   'Suggestion',
  //   'Query',
  //   'Note',
  //   'Report',
  //   'Complaint',
  // ]

  type_choices_arabic = [
    'اقتراحات',
    'استفسارات',
    'ملاحظات',
    'ابلاغات',
    'شكاوي',
  ];


  

  departments: any = [];

  name: string;
  number: string;
  massage: string;

  department_id: string;

  show_false: boolean;
  show_true: boolean;

  constructor(
    private _apiService: ApiService,
    private _route: ActivatedRoute,

  ) {}

  ngOnInit(): void {
    this.getDepartments();
    this.title = this.type_choices_arabic[
      this._route.snapshot.paramMap.get('type')
    ];

    this.show_false = false;
    this.show_true = false;

    this.name = '';
    this.number = '';
    this.massage = '';
  }

  getDepartments() {
    this._apiService.getDepartments().subscribe((data) => {
      this.departments = data;
    });
  }

  sendFeedback() {
    this.show_false = false;
    this.show_true = false;
    
    let data = {
      name: this.name,
      number: this.number,
      massage: this.massage,
      department_id: -1,
      type: this._route.snapshot.paramMap.get('type')
    };

    try {
      data['department_id'] = this.departments.find(
        (e) => e.name_arabic == this.department_id
      ).id;
    } catch (err) {
      data['department_id'] = -1;
    }

    if (this.massage != '') {
      this._apiService.sendFeedback(data).subscribe(
        (ress) => {
          console.log(ress);
          this.clear();
          this.show_true = true;
        },
        (err) => {
          console.log(err);
          this.show_false = true;

        }
      );
    } else {
      this.show_false = true;
    }
  }

  clear() {
    this.name = '';
    this.number = '';
    this.massage = '';
  }


  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }


}
