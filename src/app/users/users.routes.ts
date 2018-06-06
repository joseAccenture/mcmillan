import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CreateUserComponent } from './components/create/users.createUser.component';
import { EditUserComponent } from './components/edit/users.editUser.component';

import { ListUserComponent } from './components/list/users.listUser.component';

export const UsersRoutes: Routes = [

  {
    path: 'userslist', component: ListUserComponent
  },
  {
    path: 'createUser', component: CreateUserComponent
  },
  {
    path: 'editUser', component: EditUserComponent
  }

];