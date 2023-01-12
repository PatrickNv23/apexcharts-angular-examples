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
import { ColumnChartsComponent } from './pages/column-charts/column-charts.component';
import { StackedColumnChartComponent } from './pages/column-charts/stacked-column-chart/stacked-column-chart.component';
import { MixedChartsComponent } from './pages/mixed-charts/mixed-charts.component';
import { MultipleYAxisComponent } from './pages/mixed-charts/multiple-yaxis/multiple-yaxis.component';
import { PieChartsComponent } from './pages/pie-charts/pie-charts.component';
import { SimplePieChartComponent } from './pages/pie-charts/simple-pie-chart/simple-pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicBarChartComponent,
    LineChartsComponent,
    BasicLineChartComponent,
    AreaChartsComponent,
    BasicAreaChartComponent,
    SplineAreaChartComponent,
    ColumnChartsComponent,
    StackedColumnChartComponent,
    MixedChartsComponent,
    MultipleYAxisComponent,
    PieChartsComponent,
    SimplePieChartComponent
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
