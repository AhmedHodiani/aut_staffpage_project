import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-apply-ar',
  templateUrl: './apply-ar.component.html',
  styleUrls: ['./apply-ar.component.scss']
})
export class ApplyArComponent implements OnInit {
  name: string;
  national_or_passport_number: string;
  place_of_birth: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  // religion: string;

  mailing_address: string;
  email: string;
  phone: string;
  // telephone_fix: string;
  // fax: string;

  breadwinner_name: string;
  relative_relation: string;
  breadwinner_national_or_passport_number: string;
  breadwinner_phone: string;

  // knowen_people_one_name: string;
  // knowen_people_one_phone: string;
  // knowen_people_two_name: string;
  // knowen_people_two_phone: string;

  high_school_country: string;
  high_school_name: string;
  high_school_branch: string;
  high_school_average: string;
  high_school_year: string;

  bridging_country: string;
  bridging_major: string;
  bridging_average: string;
  bridging_year: string;
  bridging_collage_name: string;

  transfer_country: string;
  transfer_major: string;
  transfer_average: string;
  transfer_year: string;
  transfer_collage_name: string;

  degree_and_major_required_degree: string;
  degree_and_major_major: string;
  degree_and_major_semester: string;
  degree_and_major_academic_year: string;


  show: boolean;
  showError: boolean;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.show = false;
    this.showError = false;
    this.form = this.formBuilder.group({
      document_one: [''],
      document_two: [''],
      document_three: [''],
      document_four: [''],
    });
  }

  onChangeOne(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('document_one').setValue(file);
    }
  }
  onChangeTwo(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('document_two').setValue(file);
    }
  }
  onChangeThree(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('document_three').setValue(file);
    }
  }
  onChangeFour(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('document_four').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('document_one', this.form.get('document_one').value);
    formData.append('document_two', this.form.get('document_two').value);
    formData.append('document_three', this.form.get('document_three').value);
    formData.append('document_four', this.form.get('document_four').value);

    formData.append('name', this.name)
    if(this.national_or_passport_number != undefined) {
      formData.append('national_or_passport_number', this.national_or_passport_number)
    }
    formData.append('place_of_birth', this.place_of_birth)
    formData.append('date_of_birth', this.date_of_birth)
    formData.append('gender', this.gender)
    formData.append('nationality', this.nationality)
    // formData.append('religion', this.religion)

    formData.append('mailing_address', this.mailing_address)
    formData.append('email', this.email)

    if(this.phone != undefined) {
      formData.append('phone', this.phone)
    }
    // if(this.telephone_fix != undefined) {
    //   formData.append('telephone_fix', this.telephone_fix)
    // }
    // if(this.fax != undefined) {
    //   formData.append('fax', this.fax)
    // }

    formData.append('breadwinner_name', this.breadwinner_name)
    formData.append('relative_relation', this.relative_relation)
    formData.append('breadwinner_national_or_passport_number', this.breadwinner_national_or_passport_number)
    formData.append('breadwinner_phone', this.breadwinner_phone)

    // if(this.knowen_people_one_name != undefined) {
    //   formData.append('knowen_people_one_name', this.knowen_people_one_name)
    // }
    // if(this.knowen_people_one_phone != undefined) {
    //   formData.append('knowen_people_one_phone', this.knowen_people_one_phone)
    // }
    // if(this.knowen_people_two_name != undefined) {
    //   formData.append('knowen_people_two_name', this.knowen_people_two_name)
    // }
    // if(this.knowen_people_two_phone != undefined) {
    //   formData.append('knowen_people_two_phone', this.knowen_people_two_phone)
    // }

    formData.append('high_school_country', this.high_school_country)
    formData.append('high_school_name', this.high_school_name)
    formData.append('high_school_branch', this.high_school_branch)
    formData.append('high_school_average', this.high_school_average)
    formData.append('high_school_year', this.high_school_year)


    if(this.bridging_country != undefined) {
      formData.append('bridging_country', this.bridging_country)
    }
    if(this.bridging_average != undefined) {
      formData.append('bridging_average', this.bridging_average)
    }
    if(this.bridging_year != undefined) {
      formData.append('bridging_year', this.bridging_year)
    }
    if(this.bridging_major != undefined) {
      formData.append('bridging_major', this.bridging_major)
    }
    if(this.bridging_collage_name != undefined) {
      formData.append('bridging_collage_name', this.bridging_collage_name)
    }


    if(this.transfer_country != undefined) {
      formData.append('transfer_country', this.transfer_country)
    }
    if(this.transfer_major != undefined) {
      formData.append('transfer_major', this.transfer_major)
    }
    if(this.transfer_average != undefined) {
      formData.append('transfer_average', this.transfer_average)
    }
    if(this.transfer_year != undefined) {
      formData.append('transfer_year', this.transfer_year)
    }
    if(this.transfer_collage_name != undefined) {
      formData.append('transfer_collage_name', this.transfer_collage_name)
    }



    if(this.degree_and_major_required_degree != undefined) {
      formData.append('degree_and_major_required_degree', this.degree_and_major_required_degree)
    }
    if(this.degree_and_major_major != undefined) {
      formData.append('degree_and_major_major', this.degree_and_major_major)
    }
    if(this.degree_and_major_semester != undefined) {
      formData.append('degree_and_major_semester', this.degree_and_major_semester)
    }
    if(this.degree_and_major_academic_year != undefined) {
      formData.append('degree_and_major_academic_year', this.degree_and_major_academic_year)
    }


    this._apiService.sendDoc(formData).subscribe(
      (res) => {
          console.log(res);
          this.clear();
          this.show = true;
      },
      (err) => {  
        console.log(err);
        this.showError = true;
      }
    );
  }














  clear() {
    this.name = '';
    this.national_or_passport_number = '';
    this.place_of_birth = '';
    this.date_of_birth = '';
    this.gender = '';
    this.nationality = '';
    // this.religion = '';
  
    this.mailing_address = '';
    this.email = '';
    this.phone = '';
    // this.telephone_fix = '';
    // this.fax = '';
  
    this.breadwinner_name = '';
    this.relative_relation = '';
    this.breadwinner_national_or_passport_number = '';
    this.breadwinner_phone = '';
  
    // this.knowen_people_one_name = '';
    // this.knowen_people_one_phone = '';
    // this.knowen_people_two_name = '';
    // this.knowen_people_two_phone = '';
  
    this.high_school_country = '';
    this.high_school_name = '';
    this.high_school_branch = '';
    this.high_school_average = '';
    this.high_school_year = '';
  
    this.bridging_country = '';
    this.bridging_major = '';
    this.bridging_average = '';
    this.bridging_year = '';
    this.bridging_collage_name = '';
  
    this.transfer_country = '';
    this.transfer_major = '';
    this.transfer_average = '';
    this.transfer_year = '';
    this.transfer_collage_name = '';
  
    this.degree_and_major_required_degree = '';
    this.degree_and_major_major = '';
    this.degree_and_major_semester = '';
    this.degree_and_major_academic_year = '';
  }
 
}
