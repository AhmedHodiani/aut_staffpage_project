import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
  public EditorEN = ClassicEditor;
  public EditorAR = ClassicEditor;

  name_english: string = ''; 
  name_arabic: string = ''; 

  short_paragraph_english: string = ''; 
  short_paragraph_arabic: string = ''; 

  long_paragraph_english: string = ''; 
  long_paragraph_arabic: string = ''; 

  image: string = ''; 

  html_english: string = ''; 
  html_arabic: string = ''; 

  form: FormGroup;

  constructor(private _toastr: ToastrService, private formBuilder: FormBuilder, public _authService: AuthService, private _router: Router, private _apiService: ApiService) {}

  ngOnInit() {
    this._apiService.getStaffPage().subscribe(data => {
      this.name_english = data['name_english'];
      this.name_arabic = data['name_arabic'];

      this.short_paragraph_english = data['short_paragraph_english'];
      this.short_paragraph_arabic = data['short_paragraph_arabic'];

      this.long_paragraph_english = data['long_paragraph_english'];
      this.long_paragraph_arabic = data['long_paragraph_arabic'];

      this.image = data['image'];

      this.html_english = data['html_english'];
      this.html_arabic = data['html_arabic'];
    });


    this.form = this.formBuilder.group({
      document_one: [''],
    });
  }
  thereIsIMG = false;

  onChangeOne(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('document_one').setValue(file);

      this.thereIsIMG = true;
    }
  }




  logout() {
    this._authService.logout();
    this._router.navigate(['/staffadmin']);
  }

  onSave() {
    const formData = new FormData();
    if (this.thereIsIMG) {
      formData.append('image', this.form.get('document_one').value);
    } else {
      formData.append('image', 'noIMG');
    }

    formData.append('name_english', this.name_english)
    formData.append('name_arabic', this.name_arabic)

    formData.append('short_paragraph_english', this.short_paragraph_english)
    formData.append('short_paragraph_arabic', this.short_paragraph_arabic)

    formData.append('long_paragraph_english', this.long_paragraph_english)
    formData.append('long_paragraph_arabic', this.long_paragraph_arabic)

    formData.append('html_english', this.html_english)
    formData.append('html_arabic', this.html_arabic)


    this._apiService.onSave(formData).subscribe(
      (res) => {
        console.log(res);
        this._toastr.success(`Saved Successfully`);
      },
      (err) => {  
        console.log(err);
        this._toastr.error(`ERROR`);
      }
    );
  }

  
}
