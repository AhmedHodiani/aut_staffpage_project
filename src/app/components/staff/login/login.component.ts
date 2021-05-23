import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: any;

  constructor(
    public _authService: AuthService,
    private _router: Router,
    public appComponent: AppComponent,
    private _toastr: ToastrService) {}

  ngOnInit() {
    this.user = {
      username: '',
      password: '',
    };
  }

  login() {
    this._authService
      .login({ username: this.user.username, password: this.user.password })
      .then((data) => {
        // this._authService.updateData(data['token'])
        localStorage.setItem('id_token', data['token']);
        this._authService.username = this._authService.whatisusername();
        this._toastr.success(`Your are Logged in`);

        // this._authService.checkisAdmin().subscribe((data) => {
        //   localStorage.setItem('is_admin', data['is_admin']);
        //   this.appComponent.admin = data['is_admin'];
        // });

        // this._authService.checkistheone().subscribe((data) => {
        //   localStorage.setItem('is_the_one', data['is_admin']);
        //   this.appComponent.istheone = data['is_admin'];
        // });

        setTimeout(() => {
          this._router.navigate(['/staffadmin/home']);
        }, 800)

      }, error => {
        // this.show = true;
        this._toastr.error(`ERROR`);
      });
  }


  // forgotPassword() {
  //   if (this.user.username != '') {
  //     const data = {
  //       username: this.user.username
  //     }
  //     // this._authService.forgotPassword(data).subscribe(ress => {
  //     //   this._toastr.success(`تم أرسال إميل لك يحوي كلمة السر`);
  //     // }, error => {
  //     //   this._toastr.error(`ERROR`);
  //     // });
  //     window.href('("http://localhost:8000/password_reset/")')
  //   } else {
  //     this._toastr.error(`أكتب أسم المستخدم لكي نرسل لك ايميل يحوي كلمة المرور`);
  //   }
  // }
}
