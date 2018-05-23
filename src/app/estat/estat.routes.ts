import { Routes, RouterModule, CanActivate } from '@angular/router';

import { EstatLlistarComponent } from "./components/llistar/estat.llistar.component";
import { PeticioEstatComponent } from "./components/peticio/peticio.estat.component";
import { SollicitudEstatComponent } from "./components/sollicitud/sollicitud.estat.component";
import { TransaccioEstatComponent } from './components/transaccio/transaccio.estat.component';

export const estatRoutes: Routes = [

   {path:'', component: EstatLlistarComponent },
   {path:'estatpeticio', component: PeticioEstatComponent },
   {path:'estatsollicitud', component: SollicitudEstatComponent },
   {path:'estattransaccio', component: TransaccioEstatComponent },
   
];