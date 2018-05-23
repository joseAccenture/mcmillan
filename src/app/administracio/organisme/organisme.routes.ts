import { Routes, RouterModule, CanActivate } from '@angular/router';

import { OrganismeCreacioComponent } from "./components/creacio/organisme.creacio.component";
import { OrganismeDetallComponent } from "./components/detall/organisme.detall.component";
import { OrganismeLlistarComponent } from './components/llistar/organisme.llistar.component';

export const organismeRoutes: Routes = [

   {path:'', component: OrganismeLlistarComponent },
   {path:'creacio', component: OrganismeCreacioComponent },
   {path: 'detall/:org-id', component: OrganismeDetallComponent }
   
];