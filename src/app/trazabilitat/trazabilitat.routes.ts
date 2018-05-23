import { Routes, RouterModule, CanActivate } from '@angular/router';

import { TrazabilitatLlistarComponent } from './components/llistar/trazabilitat.llistar.component';

/**
 * Trazabilitat Definició de Rutes
 * 
 * Autor: Ildefonso Serrano García
 */
export const trazaRoutes: Routes = [

   {path:'', component: TrazabilitatLlistarComponent }
   
];