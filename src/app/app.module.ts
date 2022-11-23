import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InnerCardComponent } from './inner-card/inner-card.component';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { DropdownComponent } from './dropdown/dropdown.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InnerCardComponent,
    ChartCardComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
