import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from "../home/home.module";
import {UserModule} from "../users/users.module";

import { UsersCreateUser } from "../users/components/create/users.createUser";
import { HomeViewComponent } from "../home/components/homeview/home.view.component";
import { mainRoutes } from './mainContent.routes';

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
     RouterModule.forRoot(mainRoutes,
      { enableTracing: true })
  ],
  declarations: [
    UsersCreateUser,
    // HomeRootComponent,
    
  ],
  exports: [
    // ConsoleRootComponent
  ]
})
export class MainContentModule { }
