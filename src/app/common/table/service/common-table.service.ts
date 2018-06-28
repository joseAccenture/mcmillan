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
  public static backendUrl = "macmillanBackend"
 
  constructor(private http : HttpClient) { }

  getMaterials() {
    var MATERIALS = this.http.get('/'+CommonTableService.backendUrl+'/material');
    return MATERIALS;
  }
     getCLients() {
      var CLIENTS = this.http.get('/'+CommonTableService.backendUrl+'/thinclients');
      return CLIENTS;
    }
    getClientsData() {
      var CLIENTDATA = this.http.get('/'+CommonTableService.backendUrl+'/orders/7');
     return CLIENTDATA;
   }
   getOrders() {
         var ORDER_DETAIL = this.http.get('/'+CommonTableService.backendUrl+'/orders/7');
        return ORDER_DETAIL;
   }
//    getOrdersList() {
//     var ORDER_DETAIL = this.http.get('/'+CommonTableService.backendUrl+'thinorders');
//    return ORDER_DETAIL;
// }
      getUsers() {
        var USERS = this.http.get('/'+CommonTableService.backendUrl+'/thinusers');
       return USERS;
     }   
    //  getUsersColumns(): string[]{
    //   return ["nombre", "email", "tipoCliente"]
    //   } 
    // getColumns(): string[]{
    //   return ["codigoSap", "nombre"]
    // }
    // getOrderColumns():string[]{
    //   return ["ean", "material", "descripcion","unidades"]
    // }
    // getOrderListColumns():string[]{
    //   return ["referencia", "estado", "fecha","descripcion"]
    // }
    // getMaterialsColumns(): string[]{
    //   return ["ean", "descripcion"];
    // }
}



