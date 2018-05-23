import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';

import { HomeViewComponent } from "./components/homeview/home.view.component";
import { HomeLlistarComponent } from "./components/llistar/home.llistar.component";

import { HomeService } from "./service/home.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeViewComponent,
    HomeLlistarComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }