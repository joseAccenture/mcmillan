import { Injectable } from '@angular/core';
import { CLIENTS } from '../../../../assets/mock/mock-clients';
import { client } from '../../../client';
@Injectable({
  providedIn: 'root',
})
export class CommonTableService {
  value: string;
  values:string;
getCharacters(): client[] {
  return CLIENTS;
}
  constructor() {
      
  }
  onKey(event: any) { // without type info
    console.log( this.values = event.norder.toString() + ' | ' + event.nombre1 + ' | ' + event.nombre2 + ' | ' + event.email);
    this.value = event.nombre1 + ' | ' + event.nombre2 + ' | ' + event.email;
   }
   ChangeClient($event){
    return this.onKey($event);
     }

getColumns(): string[]{
  return ["norder","nombre1", "nombre2", "email", "denominacionClasificacionCliente"]};
}
