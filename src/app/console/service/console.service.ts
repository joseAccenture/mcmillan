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
export class ConsoleService {
  
  constructor(private http : HttpClient) {
      
  }
  getCLients() {
    var CLIENTS = this.http.get('http://localhost:8080/clients');
    return CLIENTS;
  }
  submitLine(line) {
    var LINE = this.http.post(' http://localhost:8080/users', line);
   return LINE;
 } 
  // getClientsData() {
  //   var CLIENTDATA = this.http.get(' http://localhost:8080/orders/1');
  //   return CLIENTDATA;
  // }
  getOrders(id) {
    var ORDER_DETAIL = this.http.get(' http://localhost:8080/orders', );
    return ORDER_DETAIL;
  }
  getOrdersList() {
    var ORDER_DETAIL = this.http.get(' http://localhost:8080/orders/thin');
    return ORDER_DETAIL;
  }
  getOrdersLines() {
    var ORDER_LINES = this.http.get(' http://localhost:8080/lineas');
    return ORDER_LINES;
  }
  getUsers() {
    var USERS = this.http.get(' http://localhost:8080/users');
    return USERS;
  }

  // WS columns to draw
  getUsersColumns(): string[] {
    return ["nombre", "email", "tipoCliente"]
  }
  getColumns(): string[] {
    return ["codigoSap", "nombre"]
  }
  getOrderColumns(): string[] {
    return ["ean", "libro", "descripcion", "unidades"]
  }
  getOrderListColumns(): string[] {
    return ["referencia", "estado", "fecha", "descripcion"]
  }
}



