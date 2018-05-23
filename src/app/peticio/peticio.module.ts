import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { peticioRoutes } from './peticio.routes';

import { PeticioRootComponent } from "./components/root/peticio.component";
import { PeticioLlistarComponent } from "./components/llistar/peticio.llistar.component";

import { PeticioService } from "./service/peticio.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(peticioRoutes)
  ],
  declarations: [
    PeticioRootComponent,
    PeticioLlistarComponent
  ],
  providers: [
    PeticioService

  ]
})
export class PeticioModule { }