import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicBarChartComponent } from './components/basic-bar-chart/basic-bar-chart.component';
import { AreaChartsComponent } from './pages/area-charts/area-charts.component';
import { LineChartsComponent } from './pages/line-charts/line-charts.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
