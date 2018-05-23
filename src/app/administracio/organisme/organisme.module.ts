import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { organismeRoutes } from './organisme.routes';

import { OrganismeRootComponent } from "./components/root/organisme.component";

import { OrganismeCreacioComponent } from './components/creacio/organisme.creacio.component';
import { OrganismeDetallComponent } from "./components/detall/organisme.detall.component";
import { OrganismeLlistarComponent } from "./components/llistar/organisme.llistar.component";

import { OrganismeService } from "./service/organisme.service";

/**
 * GS Console Organisme Module
 * 
 * Autor: Ildefonso Serrano García
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(organismeRoutes)
  ],
  declarations: [
    OrganismeRootComponent,
    OrganismeCreacioComponent,
    OrganismeDetallComponent,
    OrganismeLlistarComponent
  ],
  providers: [
    OrganismeService
  ]
})
export class OrganismeModule { }