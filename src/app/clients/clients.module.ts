import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CommonElementsModule } from '../common/common_elements.module';

import { ClientsRootComponent } from "./components/root/client-root.component";
import { ClientDataComponent } from "./components/clientdata/client.data.component";

import { ClientsService } from "./service/clients.service";
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