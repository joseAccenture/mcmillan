import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeLlistarComponent } from './components/llistar/home.llistar.component';
import { HomeViewComponent } from './components/homeview/home.view.component';

export const homeRoutes: Routes = [

   {path:'', component: HomeLlistarComponent },
   {path:'homeview', component: HomeViewComponent }
   
];