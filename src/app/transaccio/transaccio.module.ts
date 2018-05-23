import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { transaccioRoutes } from './transaccio.routes';

import { TransaccioRootComponent } from "./components/root/transaccio.component";

import { TransaccioDetallComponent } from "./components/detall/transaccio.detall.component";
import { TransaccioLlistarComponent } from "./components/llistar/transaccio.llistar.component";

import { TransaccioService } from "./service/transaccio.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(transaccioRoutes)
  ],
  declarations: [
    TransaccioRootComponent,
    TransaccioLlistarComponent,
    TransaccioDetallComponent
  ],
  providers: [
    TransaccioService
  ]
})
export class TransaccioModule { }