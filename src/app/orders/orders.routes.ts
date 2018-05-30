import { Routes, RouterModule, CanActivate } from '@angular/router';
// import { CreateUserComponent } from './components/create/users.createUser.component';
import { ListOrderComponent } from './components/list/order.listOrder.component';
import { DetailOrderComponent } from './components/detail/orders.detailOrder.component';

export const OrdersRoutes: Routes = [

    {path:'ordersList', component: ListOrderComponent,
    data: {
        breadcrumb: "Lista de pedidos"
      }
},
    {path:'detailOrder', component: DetailOrderComponent,
    data: {
        breadcrumb: "Detalle del pedido"
      }
}
   
];