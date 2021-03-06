import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// componentes tabla 
import { ClientTableComponent } from '../common/table/components/client-table/client-table.component';
import { USerTableComponent } from '../common/table/components/user-table/user-table.component';
import { OrderTableComponent } from '../common/table/components/order-table/order-table.component';
import { MaterialsTableComponent } from '../common/table/components/materials-table/materials-table.component';

import { DetailOrderTableComponent } from '../common/table/components/detailOrder-table/detailOrder-table.component';
import { ListOrderTableComponent } from '../common/table/components/listOrder-table/listOrder-table.component';
import { NewOrderTableComponent } from '../common/table/components/newOrder-table/newOrder-table.component';

import {TableRowComponent} from '../common/table-row/table-row.component';
import {BreadcrumbComponent} from '../common/breadcrumb/breadcrumb.component';
import { DataListModule, DataTableModule }  from 'primeng/primeng'; 


@NgModule({
  imports: [
    CommonModule,
    DataListModule, 
    DataTableModule
  ],
  declarations: [
    ClientTableComponent,
    USerTableComponent,
    TableRowComponent,
    OrderTableComponent,
    MaterialsTableComponent,
    DetailOrderTableComponent,
    ListOrderTableComponent,
    NewOrderTableComponent,
    BreadcrumbComponent
  ],
  exports: [
    ClientTableComponent,
    USerTableComponent,
    TableRowComponent,
    OrderTableComponent,
    MaterialsTableComponent,
    DetailOrderTableComponent,
    ListOrderTableComponent,
    NewOrderTableComponent,
    BreadcrumbComponent
    
  ]
})
export class CommonElementsModule { }
