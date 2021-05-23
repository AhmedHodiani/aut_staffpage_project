import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../services/api.service'
import { CollegesService } from 'src/app/services/colleges.service';
import { ApexNonAxisChartSeries, ApexResponsive } from "ng-apexcharts";
import {
  ApexChart,
  ChartComponent,
  ApexLegend,
} from "ng-apexcharts";

export type ChartOptions = {
  colors: any;
  states: any;
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  legend: ApexLegend;
  theme: any;
};



declare var $: any;
@Component({
  selector: 'app-home-en',
  templateUrl: './home-en.component.html',
  styleUrls: ['./home-en.component.scss']
})
export class HomeEnComponent implements OnInit {
  
  picture: any;
  figures: any;
  comments: any;
  announcements: any;
  events: any;
  news: any;
  colleges: any;
  newspage: any;
  rules: any;
  starterImage: any;

  calendar: any;


  charts: any;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private _apiService: ApiService, private _collegesService: CollegesService) {
    this.chartOptions = {
      colors: ['#FFB93F', '#272e4a', '#ff5a3f', '#6edc1b'],
      chart: {
        type: "pie",
      },
      labels: ['Male', 'Female'],
      series: [22,21],
      states: {
        normal: {
            filter: {
                type: 'none',
                value: 0,
            }
        },
        hover: {
            filter: {
                type: 'none',
                value: 0.15,
            }
        },
        active: {
            allowMultipleDataPointsSelection: false,
            filter: {
                type: 'none',
                value: 1,
            }
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            stroke: {
              show: true,
              curve: "smooth",
              lineCap: "butt",
              colors: undefined,
              width: 0,
              dashArray: 0,
            },
          },
        },
      ],
      legend: {
        show: false,
        fontSize: '12px',
      },
    };
   }

  ngOnInit(): void {
    this.getHomeData();

    $('#staticBackdroptwooo').modal('show');
  }

  getHomeData() {
    this.getHomeColleges();
    this.getNews();
    this.getAnnouncements();
    this.getEvents();
    this.getFactsAndFigures();
    this.getComments();
    this.getNewsPage();
    this.getPicture();
    this.getRules();
    this.getStarterImage();
    this.getCharts();
    this.getCalendar();
    this.getStudentGuide();
  }

  getCalendar() {
    this._apiService.getCalendar().subscribe(data => {
      this.calendar = data;
    })
  }

  studentGuide: any;
  getStudentGuide() {
    this._apiService.getStudentGuide().subscribe(data => {
      this.studentGuide = data;
    })
  }

  getStarterImage() {
    this._apiService.getStarterImage()
     .subscribe(
       data => {
         this.starterImage = data[0];
       }
     )
  }

  getRules() {
    this._apiService.getRules()
     .subscribe(
       data => {
         this.rules = data;
       }
     )
  }

  getPicture() {
    this._apiService.getPicture()
      .subscribe(
        data => {
          this.picture = data;
        },
        error => {
          console.log(error);
        })
  }

  getFactsAndFigures() {
    this._apiService.getFactsAndFigures()
      .subscribe(
        data => {
          this.figures = data;
        },
        error => {
          console.log(error);
        })
  }

  getComments() {
    this._apiService.getComments()
      .subscribe(
        data => {
          this.comments = data;
        },
        error => {
          console.log(error);
        })
  }

  getAnnouncements() {
    this._apiService.getAnnouncements()
      .subscribe(
        data => {
          this.announcements = data;
        },
        error => {
          console.log(error);
        })
  }

  getEvents() {
    this._apiService.getEvents()
      .subscribe(
        data => {
          this.events = data;
        },
        error => {
          console.log(error);
        })
  }

  getNews() {
    this._apiService.getNews()
      .subscribe(
        data => {
          this.news = data;
        },
        error => {
          console.log(error);
        })
  }

  getHomeColleges() {
    this._collegesService.getColleges()
      .subscribe(
        data => {
          this.colleges = data;
        },
        error => {
          console.log(error);
        })
  }


  getNewsPage() {
    this._apiService.GetNewsPage()
      .subscribe(
        data => {
          this.newspage = data;
        },
        error => {
          console.log(error);
        })
  }

  getCharts() {
    this._apiService.getCharts().subscribe((data) => {
      this.charts = data;

      this.charts.forEach(chart => {
        let legend = []
        let series = []

        chart['sets'].forEach(set => {
          legend.push(set['name_english'])
          series.push(set['amount'])
        })

        chart['legend'] = legend
        chart['series'] = series
      })
    })
  }

  gotocalendar() {
    window.location=this.calendar[0].url;
  }

  gotoStudentGuide() {
    window.location=this.studentGuide[0].url;
  }
}
