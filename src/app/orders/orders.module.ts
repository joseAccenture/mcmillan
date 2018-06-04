import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { OrdersRoutes } from './orders.routes';
import { CommonElementsModule } from '../common/common_elements.module';

import { OrdersRootComponent } from "./components/root/orders-root.component";
import { DetailOrderComponent } from "./components/detail/orders.detailOrder.component";
import { NewOrderComponent } from "./components/new/orders.newOrder.component";
import { ListOrderComponent } from "./components/list/order.listOrder.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(OrdersRoutes),
    CommonElementsModule,
    BrowserAnimationsModule
    
  ],
  declarations: [
    OrdersRootComponent,
    ListOrderComponent,
    DetailOrderComponent,
    NewOrderComponent
    
  ],
  providers: [
  ]
})
export class OrdersModule { }