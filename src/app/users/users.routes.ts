import { Routes, RouterModule, CanActivate } from '@angular/router';
import { CreateUserComponent } from './components/create/users.createUser.component';
import { ListUserComponent } from './components/list/users.listUser.component';

export const UsersRoutes: Routes = [

  {
    path: 'userslist', component: ListUserComponent,
    data: {
      breadcrumb: "Lista de usuarios"
    }
  },
  {
    path: 'createUser', component: CreateUserComponent,
    data: {
      breadcrumb: "Nuevo usuario"
    }
  }

];