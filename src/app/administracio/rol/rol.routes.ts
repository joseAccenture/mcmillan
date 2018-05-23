import { Routes, RouterModule, CanActivate } from '@angular/router';

import { RolCreacioComponent } from "./components/creacio/rol.creacio.component";
import { RolDetallComponent } from "./components/detall/rol.detall.component";
import { RolLlistarComponent } from './components/llistar/rol.llistar.component';

export const rolRoutes: Routes = [

   {path:'', component: RolLlistarComponent },
   {path:'creacio', component: RolCreacioComponent },
   {path: 'detall/:rol-id', component: RolDetallComponent}
   
];