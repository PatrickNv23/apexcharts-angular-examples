import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexResponsive, ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-stacked-column-chart',
  templateUrl: './stacked-column-chart.component.html',
  styleUrls: ['./stacked-column-chart.component.css']
})
export class StackedColumnChartComponent {
  @Input() series !: ApexAxisChartSeries;
  @Input() chart !: ApexChart;
  @Input() dataLabels !: ApexDataLabels;
  @Input() plopOptions !: ApexPlotOptions;
  @Input() responsive !: ApexResponsive[];
  @Input() xaxis !: ApexXAxis;
  @Input() legend !: ApexLegend;
  @Input() fill !: ApexFill;

  constructor() {
    this.series = [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 22, 43]
      },
      {
        name: "PRODUCT B",
        data: [13, 23, 20, 8, 13, 27]
      },
      {
        name: "PRODUCT C",
        data: [11, 17, 15, 15, 21, 14]
      },
      {
        name: "PRODUCT D",
        data: [21, 7, 25, 13, 22, 8]
      }
    ]
    this.chart = {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
      this.responsive = [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      this.plopOptions = {
        bar: {
          horizontal: false,
          borderRadius: 0
        }
      },
      this.xaxis = {
        type: "category",
        categories: [
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011",
          "05/2011",
          "06/2011",
        ]
      },
      this.legend = {
        position: "right",
        offsetY: 40
      },
      this.fill = {
        opacity: 1
      }
  }

}
