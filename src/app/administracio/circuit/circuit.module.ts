import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { circuitRoutes } from './circuit.routes';

import { CircuitRootComponent  } from "./components/root/circuit.component";

import { CircuitCreacioComponent } from './components/creacio/circuit.creacio.component';
import { CircuitDetallComponent } from "./components/detall/circuit.detall.component";
import { CircuitLlistarComponent } from "./components/llistar/circuit.llistar.component";

import { CircuitService } from "./service/circuit.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forChild(circuitRoutes)
  ],
  declarations: [
    CircuitRootComponent,
    CircuitCreacioComponent,
    CircuitDetallComponent,
    CircuitLlistarComponent
  ],
  providers: [
    CircuitService
  ]
})
export class CircuitModule { }