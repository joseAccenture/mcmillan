import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ConsoleModule } from "./console/console.module";
import { LoginComponent } from './common/login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeModule } from "./home/home.module";


import { PROVIDERS } from "./shared/shared.providers";

/**
 * GS Console Modul Principal
 * 
 * Autor: Ildefonso Serrano García
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ConsoleModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [
    PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
