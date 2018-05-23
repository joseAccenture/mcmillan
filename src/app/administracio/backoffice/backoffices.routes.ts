import { Routes, RouterModule, CanActivate } from '@angular/router';

import { CreacioComponent } from "./components/creacio/creacio.component";
import { BackofficeDetallComponent } from "./components/detall/backoffice.detall.component";
import { BackofficeLlistarComponent } from './components/llistar/backoffice.llistar.component';

export const backofficeRoutes: Routes = [

   {path:'', component: BackofficeLlistarComponent },
   {path:'creacio', component: CreacioComponent },
   {path: 'detall/:bo-id', component: BackofficeDetallComponent}
   
];