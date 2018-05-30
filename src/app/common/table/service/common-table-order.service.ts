import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CommonTableOrderService {
  private data: Array<any> = [];
  value: string;
  // values:string;
  USERS: string[];
// getCharacters(): client[] {
//   return CLIENTS;
// }

Url = "./assets/mock";
 
  constructor(private http : HttpClient) {
      
  }
  // onKey(event: any) { // without type info
  //   console.log( this.values = event.EAN + ' | ' + event.Descripción);
  //   // this.value = event.nombre1 + ' | ' + event.nombre2 + ' | ' + event.email;
  //  }
   ChangeClient(i){
    // return this.onKey($event);
    // return this.value = event.currentTarget.innerText;
     return i;
    
     }
     getCLients(){
      var USERS = this.http.get(this.Url + '/orders.json');
      var isUser = true;
     return USERS;
   }
getColumns(): string[]{
  return ["EAN","Material/Licencia", "Descripción", "Unidades"]};
}


