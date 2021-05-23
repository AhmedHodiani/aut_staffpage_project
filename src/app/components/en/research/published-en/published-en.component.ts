import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexNonAxisChartSeries, ApexResponsive } from "ng-apexcharts";
import {
  ApexChart,
  ChartComponent,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  colors: any;
  states: any;
  series: any;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  theme: any;
  dataLabels: any;
  stroke: any;
  title: any;
  grid: any;
  xaxis: any
};

import { ApiService } from 'src/app/services/api.service';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-published-en',
  templateUrl: './published-en.component.html',
  styleUrls: ['./published-en.component.scss']
})
export class PublishedEnComponent implements OnInit {
  // researches: any;
  colleges: any;

  charts: any;
  active: any;
  english_researches: any;
  arabic_researches: any;
  selectedResearch: any;

  staff: any;


  isChecked: boolean;

  active_display_url: any;


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


  constructor(private _apiService: ApiService) { 
  }

  ngOnInit(): void {
    this.getResearches();

    this.isChecked = true;
  }


  getResearches() {
    this._apiService.getResearches()
      .subscribe(
        data => {
          var colleges = data;
          var years = this.getYears(colleges);
          this.colleges = this.getTotals(colleges);

          this.getResearchs(colleges[0]['display_url'])

          this.chartOptions = {
            series: this.getSeries(colleges, years),
            chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: years,
          }
        };

        },
        error => {
          console.log(error);
        })
  }



  getYears(data) {
    var firstYear = 0;
    var lastYear = 0;

    data.forEach((ele) => {
      var ress = this.isChecked? ele.researches: ele.researches.filter(i => i.is_in_uni == true)
      ress.forEach((research) => {
        var date = parseInt(research.date.substring(0,4))
        if (firstYear == 0) {
          firstYear = date
        } else if (firstYear > date){
          firstYear = date
        }
        if (lastYear < date) {
          lastYear = date
        }
      })
    })


    var years = []
    
    var currentYear = firstYear

    while(currentYear <= lastYear) {
      years.push(currentYear)
      currentYear += 1
    }

    return years
  }



  getSeries(data, years) {
    var series = [];

    data.forEach((college) => {
      var collegeSeries = []

      years.forEach((year) => {
        var count = 0;
        var ress = this.isChecked? college.researches: college.researches.filter(i => i.is_in_uni == true)
        ress.forEach((research) => {
          if (year == parseInt(research.date.substring(0,4))) {
            count += 1;
          }
        })
        collegeSeries.push(count);
      });

      var dir = {'name':college.display_url, 'data':collegeSeries}

      if (collegeSeries.reduce((a, b) => a + b, 0) != 0) {
        series.push(dir)
      } 
    });

    return series;
  }


  getTotals(colleges) {
    colleges.forEach(college => {
      var total = 0;
      var ress = this.isChecked? college.researches: college.researches.filter(i => i.is_in_uni == true)
      ress.forEach((res) => total += 1);
      college['total'] = total;
      college['active'] = false;
    })
    return colleges
  }

  getResearchs(display_url) {
    var staff = [];
    var college = this.colleges.find(r => r.display_url == display_url)

    this.active_display_url = display_url;

    college.researches.forEach(research => {
      research.staff['filter'] = true;
      if (!staff.find(r => r.id == research.staff.id)) {
        staff.push(research.staff)
      }
    })


    this.staff = staff;
    this.active = display_url

    if (this.isChecked) {
      this.english_researches = college.researches.filter(r => r.is_english == true)
      this.arabic_researches = college.researches.filter(r => r.is_english == false)
    } else {
      this.english_researches = college.researches.filter(r => r.is_english == true && r.is_in_uni == true)
      this.arabic_researches = college.researches.filter(r => r.is_english == false && r.is_in_uni == true)
    }
  }

  onFilter() {
    var college = this.colleges.find(r => r.display_url == this.active_display_url)

    var english_researches;
    var arabic_researches;

    if (this.isChecked) {
      english_researches = college.researches.filter(r => r.is_english == true)
      arabic_researches = college.researches.filter(r => r.is_english == false)
    } else {
      english_researches = college.researches.filter(r => r.is_english == true && r.is_in_uni == true)
      arabic_researches = college.researches.filter(r => r.is_english == false && r.is_in_uni == true)
    }


    english_researches.forEach(research => {
      var ourstaff = this.staff.find(staff => staff.id == research.staff.id)
      if (!ourstaff.filter) {
        english_researches = english_researches.filter(r => r != research)
      }
    })

    arabic_researches.forEach(research => {
      var ourstaff = this.staff.find(staff => staff.id == research.staff.id)
      if (!ourstaff.filter) {
        arabic_researches = arabic_researches.filter(r => r != research)
      }
    })


    this.english_researches = english_researches;
    this.arabic_researches = arabic_researches;

  }


  checkValue(event: boolean){
    this.isChecked = event;
    this.getResearches();
  }


  relocate_home() {
      window.location.href = this.selectedResearch.link;
  } 


  




}
