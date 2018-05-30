import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from "../home/home.module";
// import { ConsoleModule } from "../console/console.module";
// import { UserModule } from "../users/users.module";

import { ClientTableComponent } from '../common/table/components/client-table/client-table.component';
import { USerTableComponent } from '../common/table/components/user-table/user-table.component';
import { OrderTableComponent } from '../common/table/components/order-table/order-table.component';

import {TableRowComponent} from '../common/table-row/table-row.component';
import {BreadcrumbComponent} from '../common/breadcrumb/breadcrumb.component';
// import { consoleRoutes } from "../console/console.routes";

// import { FilterPipe } from './table/components/client-table/pipes/filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    HomeModule
    // ConsoleModule,
    // consoleRoutes
    // UserModule,
   
  ],
  declarations: [
    ClientTableComponent,
    USerTableComponent,
    TableRowComponent,
    OrderTableComponent,
    BreadcrumbComponent
  ],
  exports: [
    ClientTableComponent,
    USerTableComponent,
    TableRowComponent,
    OrderTableComponent,
    BreadcrumbComponent
    
  ]
})
export class CommonElementsModule { }
