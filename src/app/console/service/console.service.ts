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
    var CLIENTS = this.http.get('http://localhost:8080/thinclients');
    return CLIENTS;
  }
  getClientsData() {
    var CLIENTDATA = this.http.get(' http://localhost:8080/orders/7');
    return CLIENTDATA;
  }
  getOrders(id) {
    var ORDER_DETAIL = this.http.get(' http://localhost:8080/orders/'+id);
    return ORDER_DETAIL;
  }
  getOrdersList() {
    var ORDER_DETAIL = this.http.get(' http://localhost:8080/thinorders');
    return ORDER_DETAIL;
  }
  getUsers() {
    var USERS = this.http.get(' http://localhost:8080/thinusers');
    return USERS;
  }
  getUsersColumns(): string[] {
    return ["nombre", "email", "tipoCliente"]
  }
  getColumns(): string[] {
    return ["codigoSap", "nombre"]
  }
  getOrderColumns(): string[] {
    return ["ean", "material", "descripcion", "unidades"]
  }
  getOrderListColumns(): string[] {
    return ["referencia", "estado", "fecha", "descripcion"]
  }
}



