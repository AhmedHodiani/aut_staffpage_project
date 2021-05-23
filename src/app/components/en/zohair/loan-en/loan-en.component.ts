import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-loan-en',
  templateUrl: './loan-en.component.html',
  styleUrls: ['./loan-en.component.scss']
})
export class LoanEnComponent implements OnInit {
  form: FormGroup;


  name: string;
  phone: string;
  student_id: string;
  major: string;
  avg_income: string;
  family_members: string;
  gpa: string;

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
    formData.append('student_id', this.student_id)
    formData.append('major', this.major)
    formData.append('avg_income', this.avg_income)
    formData.append('family_members', this.family_members)
    formData.append('gpa', this.gpa)



    if (this.name == undefined || 
      this.phone == undefined || 
      this.avg_income == undefined || 
      this.major == undefined || 
      this.family_members == undefined || 
      this.student_id == undefined ||
      this.gpa == undefined ||
      this.name == '' || 
      this.phone == '' || 
      this.avg_income == '' || 
      this.major == '' || 
      this.family_members == '' || 
      this.gpa == '' || 
      this.student_id == '') {
        this.show_false = true;
      } else {
        this._apiService.sendLoan(formData).subscribe(
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
    this.student_id = '';
    this.gpa = '';
  }
}
