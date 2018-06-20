import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class AppService implements OnInit{

  ngOnInit(): void {
    var Login = this.getLogin();
  }
  Url = "./assets/mock";
  constructor(private http : HttpClient) { }
  
  getLogin() {
    return this.http.get(this.Url + '/login.json');
  }

  
}
