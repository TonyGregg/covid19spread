import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'angular-calendar';
import { FusionChartsModule } from "angular-fusioncharts";
// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { FooterComponent } from '../main-layout/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { ChartComponent } from './chart/chart.component';
import { LayoutComponent } from './layout/layout.component';
import { NewsComponent } from './news/news.component';
import { StopSpreadComponent } from './stop-spread/stop-spread.component';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FusionChartsModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    StopSpreadComponent,
    NewsComponent,
    LayoutComponent,
    ChartComponent
  ],
  exports: [
    FooterComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
