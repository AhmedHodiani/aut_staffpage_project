import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ethics-ar',
  templateUrl: './ethics-ar.component.html',
  styleUrls: ['./ethics-ar.component.scss']
})
export class EthicsArComponent implements OnInit {
  languages: any
  active: any;

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getLanguages();
  }

  getLanguages() {
    this._apiService.getLanguages().subscribe(data => {
      this.languages = data;
      this.active = this.languages[0]
    })
  }

  makeActive(id) {
    this.active = this.languages.find(i => i.id == id)
  }

}
