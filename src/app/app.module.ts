import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import 'bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppFooter } from './scripts/app.footer';
import { AppNavbar } from './scripts/app.navbar';
import { AppHeader } from './scripts/app.header';
import { AppForm } from './scripts/app.form';
import { AppChangeClientModal } from './scripts/app.changeClientModal';
import { AppHome } from './scripts/app.home';
import { AppRoutingModule } from './app-routing.module'



@NgModule({
  declarations: [
    AppComponent,
	AppFooter,
	AppNavbar,
  AppChangeClientModal,
	AppHeader,
	AppForm,
  AppHome
  ],
  imports: [
	BrowserModule,
	NgbModule.forRoot(),
	[MatButtonModule, MatCheckboxModule],
  AppRoutingModule
  ],
   exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MyOwnCustomMaterialModule { }
