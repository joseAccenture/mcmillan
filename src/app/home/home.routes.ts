import { Routes, RouterModule, CanActivate } from '@angular/router';

// import { HomeLlistarComponent } from './components/llistar/home.llistar.component';
import { HomeViewComponent } from './components/homeview/home.view.component';
import { LoginComponent } from '../common/login/login.component';
export const homeRoutes: Routes = [

   {path:'', component: LoginComponent },
   {path:'homeview', component: HomeViewComponent }
   
];