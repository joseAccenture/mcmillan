import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule }   from '@angular/forms';

import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';


import { HomeViewComponent } from "./components/homeview/home.view.component";
import { LoginComponent } from "../common/login/login.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeViewComponent,
    LoginComponent,
  ],
  exports: [],
  providers: []
})
export class HomeModule { }