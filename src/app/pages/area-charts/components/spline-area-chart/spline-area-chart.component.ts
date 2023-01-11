import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexLegend, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-spline-area-chart',
  templateUrl: './spline-area-chart.component.html',
  styleUrls: ['./spline-area-chart.component.css']
})
export class SplineAreaChartComponent {
  @Input() series !: ApexAxisChartSeries;
  @Input() chart !: ApexChart;
  @Input() xaxis !: ApexXAxis;
  @Input() stroke !: ApexStroke;
  @Input() tooltip !: ApexTooltip;
  @Input() dataLabels !: ApexDataLabels;
  @Input() legend !: ApexLegend;
  @Input() yaxis !: ApexYAxis[];
  data: number[];

  constructor() {
    this.data = [7900, 8000, 7800, 9100, 8200, 8600, 7950, 9200, 9100, 7891]
    this.series = [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
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
        curve: "smooth"
      },
      this.legend = {
        show: true,
        position: "bottom",
        horizontalAlign: "center"
      }
    this.xaxis = {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z"
      ]
    }
    this.tooltip = {
      x: {
        format: "dd/MM/yy HH:mm"
      }
    }
    this.yaxis = [
      {
        title: {
          text: "Columna Y izquierda"
        }
      },
      {
        opposite: true,
        title: {
          text: "Columna Y derecha"
        }
      }
    ]
  }
}


