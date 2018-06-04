import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeViewComponent } from './components/homeview/home.view.component';
import { LoginComponent } from '../common/login/login.component';
export const homeRoutes: Routes = [

    {
        path: '', component: LoginComponent,
        data: {
            breadcrumb: "Login"
        }
    },
    {
        path: 'homeview', component: HomeViewComponent,
        data: {
            breadcrumb: "Inicio"
        }
    }

];