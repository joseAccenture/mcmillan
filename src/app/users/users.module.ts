import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { UsersRoutes } from './users.routes';
import { CommonElementsModule } from '../common/common_elements.module';
import { BrowserModule } from '@angular/platform-browser';

import { UsersRootComponent } from "./components/root/user-root.component";
import { CreateUserComponent } from "./components/create/users.createUser.component";
import { EditUserComponent } from "./components/edit/users.editUser.component";
import { MasiveCreateComponent } from './components/MasiveCreate/users.MasiveCreate.component';
import { ListUserComponent } from "./components/list/users.listUser.component";
// import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';
// import { TableComponent } from '../common/table/table.component';
// import {TableRowComponent} from '../common/table-row/table-row.component';
import { DataListModule, DataTableModule }  from 'primeng/primeng'; 

import { UsersService } from "./service/users.service";
import { TableRowComponent } from '../common/table-row/table-row.component';
import { USerTableComponent } from '../common/table/components/user-table/user-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forChild(UsersRoutes),
    CommonElementsModule,
    DataListModule,
    DataTableModule
  ],
  declarations: [
    UsersRootComponent,
    CreateUserComponent,
    EditUserComponent,
    ListUserComponent,
    MasiveCreateComponent
    // BreadcrumbComponent
    
  ],
  providers: [
    UsersService
  ]
})
export class UserModule { }