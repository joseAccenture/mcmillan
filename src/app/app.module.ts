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

import { PROVIDERS } from "./shared/shared.providers";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/**
 * GS Console Modul Principal
 * 
 * Autor: Ildefonso Serrano García
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
    HttpModule
  ],
  providers: [
    PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
   
    //  constructor(private http: HttpClient) {
    //       this.getJSON().subscribe(data => {
    //           console.log(data)
    //       });
    //   }
  
    //   public getJSON(): Observable<any> {
    //       return this.http.get("./assets/circuits.json")
    //   }

 }
