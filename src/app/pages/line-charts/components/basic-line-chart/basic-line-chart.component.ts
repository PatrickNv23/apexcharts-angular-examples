import { Component, Input } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexGrid, ApexStroke, ApexTheme, ApexTitleSubtitle, ApexXAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-basic-line-chart',
  templateUrl: './basic-line-chart.component.html',
  styleUrls: ['./basic-line-chart.component.css']
})
export class BasicLineChartComponent {
  @Input() series!: ApexAxisChartSeries;
  @Input() chart!: ApexChart;
  @Input() xasis!: ApexXAxis;
  @Input() dataLabels!: ApexDataLabels;
  @Input() grid!: ApexGrid;
  @Input() stroke!: ApexStroke;
  @Input() title !: ApexTitleSubtitle;
  @Input() theme !: ApexTheme;


  constructor() {
    this.series = [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        color: "#FFE90D"
      }
    ]
    this.chart = {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      },
      foreColor: "blue"
    }
    this.dataLabels = {
      enabled: true,
      background: {
        foreColor: "black",
        borderColor: "black"
      }
    }
    this.stroke = {
      curve: "straight",
      width: [10],
      dashArray: 2
    }
    this.title = {
      text: "Product Trends by Month",
      align: "center"
    }
    this.grid = {
      row: {
        colors: ["tomato", "red", "blue", "pink", "green"],
        opacity: 0.5
      },
      column: {
        colors: ["tomato", "red", "blue", "pink", "green"]
      }
    }
    this.xasis = {
      categories: [
        "Enero",
        "Febrero",
        "Marzo",
        "April",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre"
      ]
    },
      this.theme = {
        mode: "light",
        palette: "palette10"
      }


  }
}
