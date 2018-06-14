import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.prod';
// import { RequestOptionsArgs, RequestMethod, RequestOptions, Request,  HttpModule, Http, Headers } from '@angular/http';


let headers = new HttpHeaders();
let username: string = 'U23r';
let password: string = 'MacMillan!1';
headers = headers.append( 'Content-Type', 'application/json')
headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
headers = headers.append("Access-Control-Allow-Origin", "*");
headers = headers.append("Access-Control-Allow-Origin",  "http://localhost:8080");
headers = headers.append("Access-Control-Allow-Methods", "DELETE");
headers = headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");

// var basicOptions:RequestOptionsArgs = {
//   url: 'http://localhost:8080/users',
//   method: RequestMethod.Delete,
//   search: null,
//   headers: null,
//   body: null
// };

// const httpOptions = {
 
//     headers: new HttpHeaders({ 
//       'Content-Type': 'application/json'
//     })  };


  
  @Injectable({
    providedIn: 'root',
    
  })
export class UsersService {
    constructor(private http : HttpClient){}
    getUSertoEdit(id) {
        var USERS = this.http.get(' http://localhost:8080/users/'+ id);
       return USERS;
     }
     getUSerZone(id) {
      var ZONE = this.http.get(' http://localhost:8080/zone/'+ id);
     return ZONE;
   }
     submitUser(user) {
      var USERS = this.http.post(' http://localhost:8080/users', user);
     return USERS;
   } 
   submitEditUser(user) {
    var USERS = this.http.put(' http://localhost:8080/users', user);
   return USERS;
 } 
 delUser(user, idObj){
  //  const apiUrl = 'http://localhost:8080/users/'+ user.id;
  // const params = new HttpParams().set('id', user.id);
  // return this.http.delete(apiUrl, { params})
    var COMPLETE = this.http.delete('http://localhost:8080/users', user);
    return COMPLETE;
 }
}