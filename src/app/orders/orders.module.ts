import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JasperoAccordionModule } from '@jaspero/ng-accordion'

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { OrdersRoutes } from './orders.routes';
import { CommonElementsModule } from '../common/common_elements.module';

import { OrdersRootComponent } from "./components/root/orders-root.component";
import { DetailOrderComponent } from "./components/detail/orders.detailOrder.component";
import { ListOrderComponent } from "./components/list/order.listOrder.component";
import { OrdersService } from "./service/orders.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(OrdersRoutes),
    CommonElementsModule,
    JasperoAccordionModule,
    BrowserAnimationsModule,
    DlDateTimePickerDateModule
    
  ],
  declarations: [
    OrdersRootComponent,
    ListOrderComponent,
    DetailOrderComponent
    // BreadcrumbComponent
    
  ],
  providers: [
    // OrdersRoutes
  ]
})
export class OrdersModule { }