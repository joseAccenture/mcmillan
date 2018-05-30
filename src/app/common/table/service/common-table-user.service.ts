import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CommonTableUserService {
 
  value: string;
  values:string;
  USERS: string[];
// getCharacters(): client[] {
//   return CLIENTS;
// }

Url = "./assets/mock";
 
  constructor(private http : HttpClient) {
      
  }
  onKey(event: any) { // without type info
    console.log( this.values = event.nombre1 + ' | ' + event.nombre2 + ' | ' + event.email);
    this.value = event.nombre1 + ' | ' + event.nombre2 + ' | ' + event.email;
   }
   ChangeClient($event){
    return this.onKey($event);
     }
     getCLients(){
      var USERS = this.http.get(this.Url + '/users.json');
      var isUser = true;
     return USERS;
   }
getColumns(): string[]{
  return ["nombre","apellidos", "email", "tipo"]};
}


