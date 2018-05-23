import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { permisRoutes } from './permis.routes';

import { PermisRootComponent } from "./components/root/permis.component";
import { PermisLlistarComponent } from "./components/llistar/permis.llistar.component";

import { PermisService } from "./service/permis.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(permisRoutes)
  ],
  declarations: [
    PermisRootComponent,
    PermisLlistarComponent
  ],
  providers: [
    PermisService
  ]
})
export class PermisModule { }