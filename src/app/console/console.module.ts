import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from "../home/home.module";
import { CommonElementsModule } from "../common/common_elements.module";
import { UserModule } from "../users/users.module";
import { ClientModule } from "../clients/clients.module";

import { OrdersModule } from "../orders/orders.module";
// import { BreadcrumbComponent } from '../common/breadcrumb/breadcrumb.component';

import { HomeRootComponent } from "../home/components/root/home.component";
import { ConsoleRootComponent  } from "./components/console-root/console.component";
import { ConsoleNavbarComponent } from "./components/console-navbar/console.navbar.component";
// import { TableComponent } from '../common/table/table.component';
// import {TableRowComponent} from '../common/table-row/table-row.component';
// import {BreadcrumbComponent} from '../common/breadcrumb/breadcrumb.component';

import { consoleRoutes } from "./console.routes";

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    UserModule,
    ClientModule,
    OrdersModule,
    CommonElementsModule,
    RouterModule.forRoot(consoleRoutes)
  ],
  declarations: [
    ConsoleRootComponent,
    ConsoleNavbarComponent,
    HomeRootComponent,
    // BreadcrumbComponent
  ],
  exports: [
    ConsoleRootComponent,
    HomeRootComponent
  ]
})
export class ConsoleModule { }
