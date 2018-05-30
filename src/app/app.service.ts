import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AppService {

  Url = "./assets/mock";
  constructor(private http : HttpClient) { }
  
  getLogin() {
    return this.http.get(this.Url + '/login.json');
  }
}
