import { Component, Input } from '@angular/core';
import { ApexChart, ApexNonAxisChartSeries, ApexResponsive } from 'ng-apexcharts';

@Component({
  selector: 'app-simple-pie-chart',
  templateUrl: './simple-pie-chart.component.html',
  styleUrls: ['./simple-pie-chart.component.css']
})
export class SimplePieChartComponent {
  @Input() series !: ApexNonAxisChartSeries;
  @Input() chart !: ApexChart;
  @Input() responsive !: ApexResponsive[];
  @Input() labels !: any;


  constructor() {
    this.series = [44, 55, 13, 43, 22]
    this.chart = {
      width: 380,
      type: "pie"
    }
    this.labels = ["Team A", "Team B", "Team C", "Team D", "Team E"]
    this.responsive = [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  }
}
