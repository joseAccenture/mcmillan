import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { usersRoutes } from './users.routes';

import { UsersRootComponent } from "./components/root/user-root.component";
import { UsersCreateUser } from "./components/create/users.createUser";

import { UsersService } from "./service/users.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(usersRoutes)
  ],
  declarations: [
    UsersRootComponent,
    UsersCreateUser
  ],
  providers: [
    UsersService
  ]
})
export class UserModule { }