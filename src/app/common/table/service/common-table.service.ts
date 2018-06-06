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
export class CommonTableService {
  
  constructor(private http : HttpClient) { }
  Url = "./assets/mock";

  getMaterials() {
    var MATERIALS = this.http.get(this.Url + '/materials.json');
    return MATERIALS;
  }
     getCLients() {
      var CLIENTS = this.http.get('http://localhost:8080/thinclients');
      return CLIENTS;
    }
    getClientsData() {
      var CLIENTDATA = this.http.get(' http://localhost:8080/orders/7');
     return CLIENTDATA;
   }
   getOrders() {
         var ORDER_DETAIL = this.http.get(' http://localhost:8080/orders/7');
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
     getUsersColumns(): string[]{
      return ["nombre", "email", "tipoCliente"]
      } 
    getColumns(): string[]{
      return ["codigoSap", "nombre"]
    }
    getOrderColumns():string[]{
      return ["ean", "material", "descripcion","unidades"]
    }
    getOrderListColumns():string[]{
      return ["referencia", "estado", "fecha","descripcion"]
    }
    getMaterialsColumns(): string[]{
      return ["ean", "descCorta"];
    }
}



