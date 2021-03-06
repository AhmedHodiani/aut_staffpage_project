import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(public _authService: AuthService, private _router: Router) {}

  canActivate(): boolean {
    if (this._authService.isLoggedin()) {
      this._router.navigateByUrl('/staffadmin/home');
      return false;
    } else {
      return true;
    }
  }
}
