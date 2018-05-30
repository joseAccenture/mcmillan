import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ClientDataComponent } from './components/clientdata/client.data.component';

export const ClientsRoutes: Routes = [

    {
        path: 'clientdata', component: ClientDataComponent,
        data: {
            breadcrumb: "Datos del cliente"
        }
    }

];