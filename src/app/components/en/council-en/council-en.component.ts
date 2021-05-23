import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-council-en',
  templateUrl: './council-en.component.html',
  styleUrls: ['./council-en.component.scss']
})
export class CouncilEnComponent implements OnInit {

  senate: any;

  constructor(private _route: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.GetSenates(this._route.snapshot.paramMap.get('council'))

  }


  GetSenates(senate) {
    this._apiService.getSenates(senate).subscribe(data => this.senate = data)
  }

}
