import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonElementsModule } from '../common/common_elements.module';

import { ClientsRootComponent } from "./components/root/client-root.component";
import { ClientDataComponent } from "./components/clientdata/client.data.component";
// import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';
// import { TableComponent } from '../common/table/table.component';
// import {TableRowComponent} from '../common/table-row/table-row.component';

import { ClientsService } from "./service/clients.service";
import { TableRowComponent } from '../common/table-row/table-row.component';
import { USerTableComponent } from '../common/table/components/user-table/user-table.component';
import { ClientsRoutes } from './clients.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(ClientsRoutes),
    CommonElementsModule
    
  ],
  declarations: [
    ClientDataComponent,
    ClientsRootComponent
  ],
  providers: [
    ClientsService
  ]
})
export class ClientModule { }