import { Routes, RouterModule, CanActivate } from '@angular/router';

import { UsersCreateUser } from "./components/create/users.createUser";

export const usersRoutes: Routes = [

   {path:'', component: UsersCreateUser }
  
   
];