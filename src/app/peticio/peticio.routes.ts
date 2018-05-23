import { Routes, RouterModule, CanActivate } from '@angular/router';

import { PeticioLlistarComponent } from './components/llistar/peticio.llistar.component';

export const peticioRoutes: Routes = [

   {path:'', component: PeticioLlistarComponent }
   
];