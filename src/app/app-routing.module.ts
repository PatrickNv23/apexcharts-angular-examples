import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicBarChartComponent } from './components/basic-bar-chart/basic-bar-chart.component';
import { AreaChartsComponent } from './pages/area-charts/area-charts.component';
import { ColumnChartsComponent } from './pages/column-charts/column-charts.component';
import { LineChartsComponent } from './pages/line-charts/line-charts.component';
import { MixedChartsComponent } from './pages/mixed-charts/mixed-charts.component';
import { PieChartsComponent } from './pages/pie-charts/pie-charts.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "charts",
    pathMatch: "full"
  },
  {
    path: "charts",
    children: [
      {
        path: "basicbarchart",
        component: BasicBarChartComponent
      },
      {
        path: "linecharts",
        component: LineChartsComponent
      },
      {
        path: "areacharts",
        component: AreaChartsComponent
      },
      {
        path: "columncharts",
        component: ColumnChartsComponent
      },
      {
        path: "mixedcharts",
        component: MixedChartsComponent
      },
      {
        path: "piecharts",
        component: PieChartsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
