import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { OrdersRoutes } from './orders.routes';
import { CommonElementsModule } from '../common/common_elements.module';

import { OrdersRootComponent } from "./components/root/orders-root.component";
import { DetailOrderComponent } from "./components/detail/orders.detailOrder.component";
import { DeliveryNotesOrderComponent } from "./components/delivery_notes/orders.deliveryNotes.component";
import { DeliveryNoteOrderDetailComponent } from "./components/deliveryNoteDetail/orders.deliveryNoteDetail.component";

import { NewOrderComponent } from "./components/new/orders.newOrder.component";
import { ListOrderComponent } from "./components/list/orders.listOrder.component";
import { PendingOrderComponent } from "./components/pending/orders.pendingOrder.component";
import { MyDatePickerModule } from 'mydatepicker';
import { DataListModule, DataTableModule }  from 'primeng/primeng'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(OrdersRoutes),
    CommonElementsModule,
    BrowserAnimationsModule,
    MyDatePickerModule,
    DataTableModule,
    DataListModule
  ],
  declarations: [
    OrdersRootComponent,
    ListOrderComponent,
    DetailOrderComponent,
    NewOrderComponent,
    DeliveryNotesOrderComponent,
    DeliveryNoteOrderDetailComponent,
    PendingOrderComponent
    
  ],
  providers: [
  ]
})
export class OrdersModule { }