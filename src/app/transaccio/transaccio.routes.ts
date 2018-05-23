import { Routes, RouterModule, CanActivate } from '@angular/router';

import { TransaccioDetallComponent } from "./components/detall/transaccio.detall.component";
import { TransaccioLlistarComponent } from './components/llistar/transaccio.llistar.component';

export const transaccioRoutes: Routes = [

   {path:'', component: TransaccioLlistarComponent },
   {path: 'detall/:tran-id/:org-id/:bo-id/:pet-id/:sol-id', component: TransaccioDetallComponent }
   
];