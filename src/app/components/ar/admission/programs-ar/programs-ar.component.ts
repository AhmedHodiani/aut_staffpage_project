import { Component, OnInit } from '@angular/core';
import { CollegesService } from 'src/app/services/colleges.service';

@Component({
  selector: 'app-programs-ar',
  templateUrl: './programs-ar.component.html',
  styleUrls: ['./programs-ar.component.scss']
})
export class ProgramsArComponent implements OnInit {

  programs: any;
  programs_p: any;

  constructor(private _collageSevice: CollegesService) { }

  ngOnInit(): void {
    this.getPrograms();
    this.getProgramsParagraph();
  }

getProgramsParagraph() {
    this._collageSevice.getProgramsParagraph()
      .subscribe(
        data => {
          this.programs_p = data[0]['paragraph_arabic'];
          console.log(data);
        },
        error => {
          console.log(error);
        })

}

  getPrograms() {
    this._collageSevice.getPrograms()
      .subscribe(
        data => {
          this.programs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        })

  }


}
