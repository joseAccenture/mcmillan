import { Routes, RouterModule, CanActivate } from '@angular/router';

import { PermisLlistarComponent } from './components/llistar/permis.llistar.component';

export const permisRoutes: Routes = [

   {path:'', component: PermisLlistarComponent }
   
];