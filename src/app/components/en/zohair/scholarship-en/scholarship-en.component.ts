import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-scholarship-en',
  templateUrl: './scholarship-en.component.html',
  styleUrls: ['./scholarship-en.component.scss']
})
export class ScholarshipEnComponent implements OnInit {
  form: FormGroup;


  name: string;
  phone: string;
  residence: string;
  major: string;
  avg_income: string;
  family_members: string;
  social_relationship: string;
  high_school_average: string;

  show_false: boolean;
  show_true: boolean;


  constructor(private formBuilder: FormBuilder, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      document_one: [''],
    });
  }

  onChangeOne(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('document_one').setValue(file);
    }
  }

  onSubmit() {
    this.show_false = false;
    this.show_true = false;

    const formData = new FormData();
    formData.append('document_one', this.form.get('document_one').value);

    formData.append('name', this.name)
    formData.append('phone', this.phone)
    formData.append('residence', this.residence)
    formData.append('major', this.major)
    formData.append('avg_income', this.avg_income)
    formData.append('family_members', this.family_members)
    formData.append('social_relationship', this.social_relationship)
    formData.append('high_school_average', this.high_school_average)

    if (this.name == undefined || 
      this.phone == undefined || 
      this.avg_income == undefined || 
      this.major == undefined || 
      this.family_members == undefined || 
      this.residence == undefined ||
      this.name == '' || 
      this.phone == '' || 
      this.avg_income == '' || 
      this.major == '' || 
      this.family_members == '' || 
      this.residence == '' || this.social_relationship == '' || this.social_relationship == undefined || this.high_school_average == '' || this.high_school_average == undefined) {
        this.show_false = true;
      } else {
        this._apiService.sendScholarship(formData).subscribe(
      (res) => {
          console.log(res);
          this.clear();
          this.show_true = true;
      },
      (err) => {  
        console.log(err);
        this.show_false = true;
      }
    );
      }
    
  }

  clear() {
    this.name = '';
    this.phone = '';
    this.avg_income = '';
    this.family_members = '';
    this.major = '';
    this.residence = '';
    this.social_relationship = '';
    this.high_school_average = '';
  }
}
