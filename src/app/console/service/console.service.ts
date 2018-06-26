import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Headers, Http, RequestOptions } from '@angular/http';



const httpOptions = {
  headers: new HttpHeaders()
  // let headers = new HttpHeaders();
};
// httpOptions.headers.append("Authorization", "Basic " + btoa("ilde:1234"));
// httpOptions.headers.append("Content-Type", "application/x-www-form-urlencoded");


@Injectable({
  providedIn: 'root',
})
export class ConsoleService {
  public static backendUrl = "macmillanBackend"
   

  constructor(private http : HttpClient) {
      
  }
  
  getCLients(id: number) {
        var CLIENTS = this.http.get('/'+ConsoleService.backendUrl+'/customers/'+id, httpOptions);
         return CLIENTS;
  }

  getCLientDetail(numCliente) {
  
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Access-Control-Allow-Origin ', 'http://localhost:4200');
    headers.set('Authorization', 'Basic ' + btoa('U23r:MacMillan!1'));
    var CLIENTS = this.http.get  ('/'+ConsoleService.backendUrl+'/customers/'+numCliente, {headers});
    return CLIENTS;
  }
  submitLine(line) {
    var LINE = this.http.post('/'+ConsoleService.backendUrl+'/users', line);
   return LINE;
 } 
  getOrders(id) {
 var ORDER_DETAIL = this.http.get('/'+ConsoleService.backendUrl+'/orders/'+ id, httpOptions);
     return ORDER_DETAIL;
   }

  getOrdersList(fecEnt, fecSal, id) {
    var ORDER_DETAIL = this.http.get('/'+ConsoleService.backendUrl+'/salesorders/customers/'+id+'?numCliente='+id+'&organizacionVentas=0001&fechaDocumentoDesde='+fecEnt+'&fechaDocumentoHasta='+fecSal);
    return ORDER_DETAIL;
  }
  getDeliveryNotes(numDocumentoComercial){
    var DELIVERY_NOTES = this.http.get('/'+ConsoleService.backendUrl+'/salesorders/'+numDocumentoComercial+'/deliverynotes');
    return DELIVERY_NOTES;
  }
  getDeliveryNoteDetail(numDocumentoComercial){
    var DELIVERY_NOTE_DETAIL = this.http.get('/'+ConsoleService.backendUrl+'/deliverynotes/'+numDocumentoComercial);
    return DELIVERY_NOTE_DETAIL;

  }
  getOrdersLines() {
    var ORDER_LINES = this.http.get(' /'+ConsoleService.backendUrl+'/lineas');
    return ORDER_LINES;
  }
  getUsersbyId(id) {
    var USERS = this.http.get(' /'+ConsoleService.backendUrl+'/users/'+id);
    return USERS;
  }
  getUsers() {
    var USERS = this.http.get(' /'+ConsoleService.backendUrl+'/users/');
    return USERS;
  }
  getLogin(userToVal) {
    var USERS = this.http.post(' /'+ConsoleService.backendUrl+'/login', userToVal);
    return USERS;
  }

  // WS columns to draw
  // getUsersColumns(): string[] {
  //   return ["nombre", "email", "tipoCliente"]
  // }
  // getColumns(): string[] {
  //   return ["numCliente", "email"]
  // }
  // getOrderColumns(): string[] {
  //   return ["numMaterial", "numDocumentoComercial", "statusDocumento", "cantidadPedido"]
  // }
  // getOrderListColumns(): string[] {
  //   return ["referencia", "estado", "fecha", "descripcion"]
  // }
}



