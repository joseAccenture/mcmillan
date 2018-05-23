import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { rolRoutes } from './rol.routes';

import { RolRootComponent } from "./components/root/rol.component";

import { RolCreacioComponent } from './components/creacio/rol.creacio.component';
import { RolDetallComponent } from "./components/detall/rol.detall.component";
import { RolLlistarComponent } from "./components/llistar/rol.llistar.component";

import { RolService } from "./service/rol.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(rolRoutes)
  ],
  declarations: [
    RolRootComponent,
    RolCreacioComponent,
    RolDetallComponent,
    RolLlistarComponent
  ],
  providers: [
    RolService
  ]
})
export class RolModule { }