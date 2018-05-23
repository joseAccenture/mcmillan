import { Routes, RouterModule, CanActivate } from '@angular/router';

import { SollicitudDetallComponent } from "./components/detall/sollicitud.detall.component";
import { SollicitudLlistarComponent } from './components/llistar/sollicitud.llistar.component';

export const sollicitudRoutes: Routes = [

   {path:'', component: SollicitudLlistarComponent },
   {path: 'detall/:sol-id/:org-id/:bo-id/:pet-id', component: SollicitudDetallComponent }
   
];