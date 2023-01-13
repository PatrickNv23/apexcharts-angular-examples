import { getCurrencySymbol } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexFill
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries,
  chart: ApexChart,
  xaxis: ApexXAxis,
  title: ApexTitleSubtitle
}

@Component({
  selector: 'app-basic-bar-chart',
  templateUrl: './basic-bar-chart.component.html',
  styleUrls: ['./basic-bar-chart.component.css']
})
export class BasicBarChartComponent {
  //@ViewChild("chart") chart!: ChartComponent;
  //public chartOptions: Partial<ChartOptions>;
  @Input() series!: ApexAxisChartSeries | ApexNonAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xaxis!: ApexXAxis;
  @Input() title!: ApexTitleSubtitle;
  @Input() fill!: ApexFill;
  constructor() {
    this.series = [
      {
        name: "My-series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ];

    this.chart = {
      height: 350,
      background: "white",
      type: "bar",
      selection: {
        enabled: true,
        type: 'x',
        fill: {
          color: '#24292e',
          opacity: 0.1
        },
        xaxis: {
          min: 2011,
          max: 2013
        }
      }
    }

    this.xaxis = {
      type: "category",
      categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre"],
      tickPlacement: "between",
      labels: {
        show: true,
        showDuplicates: true,
        style: {
          colors: "lightblue"
        }
      },
      group: {
        groups: [
          {
            title: "ABC",
            cols: 3
          },
          {
            title: "XYZ",
            cols: 4
          }
        ],
        style: {
          colors: ["purple", "red"]
        }
      },
      axisBorder: {
        show: true,
        color: "red"
      },
      axisTicks: {
        show: true,
        borderType: "dotted",
        color: "orange"
      },
      title: {
        text: "EJE X xd",
        offsetX: 50,
        offsetY: 100
      },
      crosshairs: {
        show: true,
        position: "back"
      }

    };

    this.title = {
      text: "My First Angular Chart",
      style: {
        fontSize: "25",
        color: "balck"
      }
    },
      this.fill = {
        colors: ["#f00"]
      }
  }
}
