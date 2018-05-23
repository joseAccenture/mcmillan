import { Routes, RouterModule, CanActivate } from '@angular/router';

import { UsuariCreacioComponent } from "./components/creacio/usuari.creacio.component";
import { UsuariDetallComponent } from "./components/detall/usuari.detall.component";
import { UsuariLlistarComponent } from './components/llistar/usuari.llistar.component';

export const usuariRoutes: Routes = [

   {path:'', component: UsuariLlistarComponent },
   {path:'creacio', component: UsuariCreacioComponent },
   {path: 'detall/:usu-id', component: UsuariDetallComponent}
   
];