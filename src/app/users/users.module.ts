import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { UsersRoutes } from './users.routes';
import { CommonElementsModule } from '../common/common_elements.module';

import { UsersRootComponent } from "./components/root/user-root.component";
import { CreateUserComponent } from "./components/create/users.createUser.component";
import { ListUserComponent } from "./components/list/users.listUser.component";
// import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';
// import { TableComponent } from '../common/table/table.component';
// import {TableRowComponent} from '../common/table-row/table-row.component';

import { UsersService } from "./service/users.service";
import { TableRowComponent } from '../common/table-row/table-row.component';
import { USerTableComponent } from '../common/table/components/user-table/user-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(UsersRoutes),
    CommonElementsModule
    
  ],
  declarations: [
    UsersRootComponent,
    CreateUserComponent,
    ListUserComponent
    // BreadcrumbComponent
    
  ],
  providers: [
    UsersService
  ]
})
export class UserModule { }