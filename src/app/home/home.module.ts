import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';

import { HomeViewComponent } from "./components/homeview/home.view.component";
import { LoginComponent } from "../common/login/login.component";
import { FilterPipe } from '../common/table/components/client-table/pipes/filter.pipe';
import { HomeService } from "./service/home.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeViewComponent,
    LoginComponent,
    FilterPipe
  ],
  exports: [
    FilterPipe
],
  providers: [
    HomeService
  ]
})
export class HomeModule { }