import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/centers';

@Injectable({
  providedIn: 'root'
})
export class CentersService {

  constructor(private _http: HttpClient) { }


  getCenters() {
    return this._http.get(`${baseUrl}/CentersList`);
  }

  getCenter(center) {
    return this._http.get(`${baseUrl}/CentersList/${center}`);
  }


}
