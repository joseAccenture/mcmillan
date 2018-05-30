import { Routes, RouterModule } from '@angular/router';

import { HomeRootComponent } from "../home/components/root/home.component"
import { homeRoutes } from "../home/home.routes";

import { UsersRootComponent } from "../users/components/root/user-root.component";
import { UsersRoutes } from "../users/users.routes";
import { ClientsRootComponent } from "../clients/components/root/client-root.component";
import { ClientsRoutes } from "../clients/clients.routes";

import { OrdersRootComponent } from "../orders/components/root/orders-root.component";
import { OrdersRoutes } from "../orders/orders.routes";


export const consoleRoutes: Routes = [ 
    {
        path: '',
        children: [{
            path: 'inicio', 
            component: HomeRootComponent,
            children: [...homeRoutes] 
        }]
    },
    {
        path: '',
        children: [{
            path: 'users', 
            component: UsersRootComponent,      
            children: [...UsersRoutes]          
        }]
    },
    {
        path: '',
        children: [{
            path: 'orders', 
            component: OrdersRootComponent,      
            children: [...OrdersRoutes]          
        }]
    },
    {
        path: '',
        children: [{
            path: 'clients', 
            component: ClientsRootComponent,      
            children: [...ClientsRoutes]          
        }]
    }
];