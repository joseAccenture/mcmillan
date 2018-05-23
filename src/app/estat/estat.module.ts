import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { estatRoutes } from './estat.routes';

import { EstatRootComponent } from "./components/root/estat.component";

import { EstatLlistarComponent } from "./components/llistar/estat.llistar.component";
import { PeticioEstatComponent } from './components/peticio/peticio.estat.component';
import { SollicitudEstatComponent } from "./components/sollicitud/sollicitud.estat.component";
import { TransaccioEstatComponent } from "./components/transaccio/transaccio.estat.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(estatRoutes)
  ],
  declarations: [
    EstatRootComponent,
    EstatLlistarComponent,
    PeticioEstatComponent,
    SollicitudEstatComponent,
    TransaccioEstatComponent
  ]
})
export class EstatModule { }