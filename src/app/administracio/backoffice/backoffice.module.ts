import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { backofficeRoutes } from './backoffices.routes';

import { BackofficeRootComponent } from "./components/root/backoffice.component";

import { CreacioComponent } from './components/creacio/creacio.component';
import { BackofficeDetallComponent } from "./components/detall/backoffice.detall.component";
import { BackofficeLlistarComponent } from "./components/llistar/backoffice.llistar.component";

import { BackofficeService } from "./service/backoffice.service";

/**
 * GS Console Backoffice Module
 * 
 * Autor: Ildefonso Serrano García
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(backofficeRoutes)
  ],
  declarations: [
    BackofficeRootComponent,
    CreacioComponent,
    BackofficeLlistarComponent,
    BackofficeDetallComponent
  ], 
  providers: [
    BackofficeService
  ]
})
export class BackofficeModule { }