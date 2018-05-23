import { Routes, RouterModule, CanActivate } from '@angular/router';

import { CircuitCreacioComponent } from "./components/creacio/circuit.creacio.component";
import { CircuitDetallComponent } from "./components/detall/circuit.detall.component";
import { CircuitLlistarComponent } from './components/llistar/circuit.llistar.component';

export const circuitRoutes: Routes = [

   {path:'', component: CircuitLlistarComponent },
   {path:'creacio', component: CircuitCreacioComponent },
   {path: 'detall/:cir-id', component: CircuitDetallComponent }
   
];