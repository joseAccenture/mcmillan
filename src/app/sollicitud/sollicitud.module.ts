import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { sollicitudRoutes } from './sollicitud.routes';

import { SollicitudRootComponent } from "./components/root/sollicitud.component";

import { SollicitudDetallComponent } from "./components/detall/sollicitud.detall.component";
import { SollicitudLlistarComponent } from "./components/llistar/sollicitud.llistar.component";

import { SollicitudService } from "./service/sollicitud.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(sollicitudRoutes)
  ],
  declarations: [
    SollicitudRootComponent,
    SollicitudLlistarComponent,
    SollicitudDetallComponent
  ],
  providers: [
    SollicitudService
  ]
})
export class SollicitudModule { }