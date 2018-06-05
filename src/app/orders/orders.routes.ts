import { Routes, RouterModule, CanActivate } from '@angular/router';
// import { CreateUserComponent } from './components/create/users.createUser.component';
import { ListOrderComponent } from './components/list/orders.listOrder.component';
import { DetailOrderComponent } from './components/detail/orders.detailOrder.component';
import { NewOrderComponent } from './components/new/orders.newOrder.component';
import { PendingOrderComponent } from './components/pending/orders.pendingOrder.component';

export const OrdersRoutes: Routes = [

  {
    path: 'ordersList', component: ListOrderComponent,
  },
  {
    path: 'detailOrder', component: DetailOrderComponent,
  },
  {
    path: 'newOrder', component: NewOrderComponent,
  },
  {
    path: 'pendingOrder', component: PendingOrderComponent,
  }

];