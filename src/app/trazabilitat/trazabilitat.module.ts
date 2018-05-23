import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { trazaRoutes } from './trazabilitat.routes';

import { TrazabilitatRootComponent } from "./components/root/trazabilitat.component";
import { TrazabilitatLlistarComponent } from "./components/llistar/trazabilitat.llistar.component";

import { TrazabilitatService } from "./service/trazabilitat.service";

/**
 * Trazabilitat Modul
 * 
 * Autor: Ildefonso Serrano García
 */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(trazaRoutes)
  ],
  declarations: [
    TrazabilitatRootComponent,
    TrazabilitatLlistarComponent
  ],
  providers: [
    TrazabilitatService

  ]
})
export class TrazabilitatModule { }