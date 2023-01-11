import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BasicBarChartComponent } from './components/basic-bar-chart/basic-bar-chart.component';
import { LineChartsComponent } from './pages/line-charts/line-charts.component';
import { BasicLineChartComponent } from './pages/line-charts/components/basic-line-chart/basic-line-chart.component';
import { AreaChartsComponent } from './pages/area-charts/area-charts.component';
import { BasicAreaChartComponent } from './pages/area-charts/components/basic-area-chart/basic-area-chart.component';
import { SplineAreaChartComponent } from './pages/area-charts/components/spline-area-chart/spline-area-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicBarChartComponent,
    LineChartsComponent,
    BasicLineChartComponent,
    AreaChartsComponent,
    BasicAreaChartComponent,
    SplineAreaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
