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
    backendUrl: string;
    Origin: string;
    URLactual: string;
  DoRedirect() {
    this.Origin =  window.location.origin;
    this.URLactual = window.location.pathname.slice(1).toString();
    if (this.URLactual.includes('macmillanEducation') && !this.Origin.includes('http://localhost:8080')){
      this.backendUrl = '/macmillanBackend';
    }else{
      this.backendUrl = 'http://localhost:8080'
    }

  }

    constructor(private http : HttpClient){}
    sendCredential(id){
      this.DoRedirect();
        var USERS = this.http.get(this.backendUrl+'/users/credential/'+id);
       return USERS; 
    }
    getUSertoEdit(id) {
      this.DoRedirect();
        var USERS = this.http.get(this.backendUrl+'/users/'+ id);
       return USERS;
     }
     getUSerZone(id) {
      this.DoRedirect();
      var ZONE = this.http.get(this.backendUrl+'/zone/'+ id);
     return ZONE;
   }
     submitUser(user) {
      this.DoRedirect();
      var USERS = this.http.post(this.backendUrl+'/users', user);
     return USERS;
   } 
   submitEditUser(user) {
    this.DoRedirect();
    var USERS = this.http.put(this.backendUrl+'/users', user);
   return USERS;
 } 
 submitNewUser(user) {
  this.DoRedirect();
  var USERS = this.http.post(this.backendUrl+'/users', user);
 return USERS;
} 
submitExcelUser(myFile) {
  this.DoRedirect();
  let headers = new HttpHeaders();
  headers.append( 'Content-Type', 'multipart/form-data');
  headers.append('Access-Control-Allow-Origin', '*');
  let body = new FormData();
  body.append('myFile', myFile);
  var EXCEL = this.http.post(this.backendUrl+'/excel', body, {headers: headers});
   return EXCEL;
  } 

  delUser(idObj){ 
    this.DoRedirect();
    let headers = new HttpHeaders(); 
    headers.append( 'Content-Type', 'application/json'); 
    headers.append('Access-Control-Allow-Origin', '*'); 
      var COMPLETE = this.http.delete(this.backendUrl+'/users/'+ idObj, {headers: headers}); 
      return COMPLETE; 
 }
}