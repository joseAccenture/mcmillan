import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { usuariRoutes } from './usuari.routes';

import { UsuariRootComponent } from "./components/root/usuari.component";

import { UsuariCreacioComponent } from './components/creacio/usuari.creacio.component';
import { UsuariDetallComponent } from "./components/detall/usuari.detall.component";
import { UsuariLlistarComponent } from "./components/llistar/usuari.llistar.component";

import { UsuariService } from "./service/usuari.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usuariRoutes)
  ],
  declarations: [
    UsuariRootComponent,
    UsuariCreacioComponent,
    UsuariDetallComponent,
    UsuariLlistarComponent
  ],
  providers: [
    UsuariService
  ]
})
export class UsuariModule { }