import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'


const httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'})
  };
  
  @Injectable({
    providedIn: 'root',
  })
export class UsersService {
    constructor(private http : HttpClient){}
    getUSertoEdit(id) {
        var USERS = this.http.get(' http://localhost:8080/users/'+id);
       return USERS;
     } 
}