import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexStroke, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-basic-area-chart',
  templateUrl: './basic-area-chart.component.html',
  styleUrls: ['./basic-area-chart.component.css']
})
export class BasicAreaChartComponent {
  @Input() series !: ApexAxisChartSeries;
  @Input() chart !: ApexChart;
  @Input() xaxis !: ApexXAxis;
  @Input() stroke !: ApexStroke;
  @Input() dataLabels !: ApexDataLabels;
  @Input() yaxis !: ApexYAxis;
  @Input() title !: ApexTitleSubtitle;
  @Input() labels !: string[];
  @Input() legend !: ApexLegend;
  @Input() subtitle !: ApexTitleSubtitle;
  data: number[];


  constructor() {
    this.data = [7900, 8000, 7800, 9100, 8200, 8600, 7950, 9200, 9100, 7891]
    this.series = [
      {
        name: "STOCK ABC",
        data: this.data
      }
    ],
      this.chart = {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      this.dataLabels = {
        enabled: false
      },
      this.stroke = {
        curve: "straight"
      },

      this.title = {
        text: "Fundamental Analysis of Stocks",
        align: "center"
      },
      this.subtitle = {
        text: "Price Movements",
        align: "left"
      },
      this.labels = ["14 Nov", "15 Nov", "17 Nov", "20 Nov", "23 Nov", "26 Nov", "29 Nov", "02 Dec", "05 Dec", "08 Dec"]
    this.xaxis = {
      type: "datetime"
    },
      this.yaxis = {
        opposite: false
      },
      this.legend = {
        show: true,
        horizontalAlign: "left"
      }
  }










}
