import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-ethics-en',
  templateUrl: './ethics-en.component.html',
  styleUrls: ['./ethics-en.component.scss']
})
export class EthicsEnComponent implements OnInit {
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
