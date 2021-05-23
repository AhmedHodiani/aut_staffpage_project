import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public _authService: AuthService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._authService.isLoggedin()) {
      return true
    } else {
      this._router.navigateByUrl('/staffadmin');
      return false
    }
  }

}
