import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/colleges';

@Injectable({
  providedIn: 'root'
})
export class CollegesService {

  constructor(private _http: HttpClient) { }


  getColleges() {
    return this._http.get(`${baseUrl}/CollegesList`);
  }

  getCollege(college) {
    return this._http.get(`${baseUrl}/CollegesList/${college}`);
  }

  getPrograms() {
    return this._http.get(`${baseUrl}/GetPrograms`);
  }

getProgramsParagraph() {
    return this._http.get(`${baseUrl}/ProgramParagraph`);
}


}
