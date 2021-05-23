import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpOptions: any;
  public username = this.whatisusername();
  // public isAdmin = this.boolisAdmin();

  constructor(private _http: HttpClient, private _router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  public login(user) {
    return this._http.post('http://localhost:8000/auth/login/', JSON.stringify(user), this.httpOptions).toPromise();
  };


  public updateData(token) {
    localStorage.setItem('id_token', token);
    this.username = this.whatisusername();
  }

  public logout() {
    localStorage.removeItem('id_token');
  }

  public isLoggedin() {
    return !!localStorage.getItem('id_token')
  }

  public whatisusername() {
    if (this.isLoggedin()) {
      const token_parts = localStorage.getItem("id_token").split(/\./);
      const token_decoded = JSON.parse(window.atob(token_parts[1]));
      return token_decoded.username;
    } else {
      return 'null'
    }
  }

  // public getStaffPage() {
  //   return this._http.get(``);
  // }
}
