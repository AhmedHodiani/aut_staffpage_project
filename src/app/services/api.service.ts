import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8000/api';
const url = 'http://localhost:8000';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }




  getFactsAndFigures() {
    return this._http.get(`${baseUrl}/GetFactsAndFigures`);
  }

  getComments() {
    return this._http.get(`${baseUrl}/GetComments`);
  }

  
  public getStaffPage() {
    return this._http.get(`${baseUrl}/getStaffPage`);
  }

  public getStaffPageForUsers(url) {
    return this._http.get(`${baseUrl}/getStaffPageForUsers/${url}`);
  }

  public onSave(formData) {
    return this._http.post<any>(`${baseUrl}/getStaffPage`, formData);
  }

  getAnnouncements() {
    return this._http.get(`${baseUrl}/GetAnnouncements`);
  }

  getEvents() {
    return this._http.get(`${baseUrl}/GetEvents`);
  }

  getRules() {
    return this._http.get(`${baseUrl}/GetRules`);
  }

  getNews() {
    return this._http.get(`${baseUrl}/GetNews`);
  }


  GetNewsPage() {
    return this._http.get(`${baseUrl}/GetNewsPage`);
  }


  getNewsDetails(id) {
    return this._http.get(`${baseUrl}/GetNewsDetails/${id}`);
  }

  getCalendar() {
    return this._http.get(`${baseUrl}/GetCalendar`);
  }

  getStudentGuide() {
    return this._http.get(`${baseUrl}/GetStudentGuide`);
  }


  getResearches() {
    return this._http.get(`${url}/researches/GetResearches`);
  }

  getJournal() {
    return this._http.get(`${url}/researches/GetJournal`);
  }

  getStaff() {
    return this._http.get(`${url}/presidency/StaffList`);
  }

  getPresident() {
    return this._http.get(`${url}/presidency/GetPresident`);
  }

  GetStudents() {
    return this._http.get(`${url}/honorary_board/GetStudents`);
  }


  GetLibrarySlider() {
    return this._http.get(`${url}/students_page/GetLibrarySlider`);
  }

  GetSportsSlider() {
    return this._http.get(`${url}/students_page/GetSportsSlider`);
  }

  GetAccommodationsSlider() {
    return this._http.get(`${url}/students_page/GetAccommodationsSlider`);
  }

  getCourseSchedule() {
    return this._http.get(`${url}/students_page/GetCourseSchedule`);
  }

  getExamsSchedule() {
    return this._http.get(`${url}/students_page/GetExamsSchedule`);
  }

  sendStudent(data) {
    return this._http.post(`${url}/submissions/sendStudent`, data);
  }
 
  public sendDoc(formData) {
    return this._http.post<any>(`${url}/submissions/sendDoc`, formData);
  }
  
  
  getStarterImage() {
    return this._http.get(`${baseUrl}/StarterImage`);
  }


  

  getFlipedBook() {
    return this._http.get(`${baseUrl}/FlipedBook`);
  }
  
  getGallaryList() {
    return this._http.get(`${baseUrl}/GetAlbums`);
  }

  getAlumniGallaryList() {
    return this._http.get(`${url}/alumni/GetAlbums`);
  }
  getAlumniFlipedBook() {
    return this._http.get(`${url}/alumni/FlipedBook`);
  }

  getAlumniVideo() {
    return this._http.get(`${url}/alumni/GetVideo`);
  }

  getPicture() {
    return this._http.get(`${baseUrl}/GetPicture`)
  }

  getAudio() {
    return this._http.get(`${baseUrl}/GetAudio`);
  }



  getDepartments() {
    return this._http.get(`${url}/feedbacks/getDepartments`);
  }

  sendFeedback(data) {
    return this._http.post(`${url}/feedbacks/sendFeedback`, data);
  }

  getLanguages() {
    return this._http.get(`${url}/ethics/getLanguages`);
  }

  getCharts() {
    return this._http.get(`${url}/charts/getCharts`)
  }

  GetHomeSenates() {
    return this._http.get(`${url}/senates/GetHomeSenates`);
  }

  getSenates(senate) {
    return this._http.get(`${url}/senates/GetSenate/${senate}`);
  }


  getSustainHtml() {
    return this._http.get(`${url}/sustainability/getSustainHtml`);
  }

  getMainImage() {
    return this._http.get(`${url}/sustainability/getMainImage`);
  }

  getSustainImages() {
    return this._http.get(`${url}/sustainability/getSustainImages`);
    
  }


  sendScholarship(formData) {
    return this._http.post<any>(`${url}/submissions/scholarship`, formData);
  }
  
  sendLoan(formData) {
    return this._http.post<any>(`${url}/submissions/loan`, formData);
  }
  

  
}
