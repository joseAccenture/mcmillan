import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from "../home/home.module";
import { CommonElementsModule } from "../common/common_elements.module";
import { UserModule } from "../users/users.module";
import { ClientModule } from "../clients/clients.module";

import { OrdersModule } from "../orders/orders.module";

import { HomeRootComponent } from "../home/components/root/home.component";
import { ConsoleRootComponent  } from "./components/console-root/console.component";
import { ConsoleNavbarComponent } from "./components/console-navbar/console.navbar.component";  
import { DataListModule, DataTableModule }  from 'primeng/primeng';  


import { consoleRoutes } from "./console.routes";

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    UserModule,
    ClientModule,
    OrdersModule,
    DataListModule,
    DataTableModule,
    CommonElementsModule,
    RouterModule.forRoot(consoleRoutes, {onSameUrlNavigation: 'reload'})
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
