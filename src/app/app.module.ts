import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { ConsoleModule } from "./console/console.module";
import { FooterComponent } from './common/footer/footer.component';
import { HomeModule } from "./home/home.module";
import { HttpClient } from '@angular/common/http'; 
import { Observable } from "rxjs";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsoleService } from './console/service/console.service';
import { ConsoleDataService } from './console/service/consoleData.service';

import { MyDatePickerModule } from 'mydatepicker';



/**
 * GS Console Modul Principal
 * 
 * Autor: Sergio Salazar Cardoso
 */
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ConsoleModule,
    HomeModule,
    HttpClientModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [
    ConsoleService,
    ConsoleDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
