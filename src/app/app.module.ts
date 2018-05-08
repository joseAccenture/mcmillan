import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import { AppComponent } from './app.component';
import { AppFooter } from './scripts/app.footer';
import { AppNavbar } from './scripts/app.navbar';
import { AppHeader } from './scripts/app.header';
import { AppForm } from './scripts/app.form';


@NgModule({
  declarations: [
    AppComponent, 
	AppFooter,
	AppNavbar,
	AppHeader,
	AppForm
  ],
  imports: [
	BrowserModule,
	NgbModule.forRoot(),
	[MatButtonModule, MatCheckboxModule]
	
  ],
   exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MyOwnCustomMaterialModule { }

