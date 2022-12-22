import {Directive, NgModule, ViewContainerRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { HomeComponent } from './home/home.component';
import { ExampleComponent } from './example/example.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import {TableModule} from "./table/table.module";
import { AgefilterComponent } from './agefilter/agefilter.component';
import { DatefilterComponent } from './datefilter/datefilter.component';
import { TitleFilterComponent } from './home/title-filter/title-filter.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    ExampleComponent,
    IndexComponent,
    AgefilterComponent,
    DatefilterComponent,
    TitleFilterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
