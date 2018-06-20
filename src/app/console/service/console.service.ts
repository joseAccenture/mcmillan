import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Headers, Http, RequestOptions } from '@angular/http';


/*
const httpOptions = {
  headers: new HttpHeaders()
  // let headers = new HttpHeaders();
};
httpOptions.headers.append("Authorization", "Basic " + btoa("ilde:1234"));
httpOptions.headers.append("Content-Type", "application/x-www-form-urlencoded");
*/

@Injectable({
  providedIn: 'root',
})
export class ConsoleService {
  
  

  constructor(private http : HttpClient) {
      
  }
  getCLients() {
  
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Access-Control-Allow-Origin ', 'http://localhost:4200');
    headers.set('Authorization', 'Basic ' + btoa('U23r:MacMillan!1'));

    // this.http.get(url2, {headers}).subscribe(data => {
    //   console.log(data);
    // });

    var CLIENTS = this.http.get  ('http://localhost:8080/customers/040', {headers});
    return CLIENTS;
    

    /* 
    var CLIENTS = this.http.get  ('http://localhost:8080/customers/040', httpOptions);
    return CLIENTS;
    */
  }
  getCLientDetail(numCliente) {
  
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Access-Control-Allow-Origin ', 'http://localhost:4200');
    headers.set('Authorization', 'Basic ' + btoa('U23r:MacMillan!1'));

    var CLIENTS = this.http.get  ('http://localhost:8080/customers/'+numCliente, {headers});
    return CLIENTS;
    

    /* 
    var CLIENTS = this.http.get  ('http://localhost:8080/customers/040', httpOptions);
    return CLIENTS;
    */
  }
  submitLine(line) {
    var LINE = this.http.post(' http://localhost:8080/users', line);
   return LINE;
 } 
  // getClientsData() {
  //   var CLIENTDATA = this.http.get(' http://localhost:8080/orders/1');
  //   return CLIENTDATA;
  // }
  getOrders() {
    var ORDER_DETAIL = this.http.get(' http://localhost:8080/orders');
    return ORDER_DETAIL;
  }
  getOrdersList() {
    var ORDER_DETAIL = this.http.get('http://localhost:8080/salesorders/customers/40?numCliente=040&organizacionVentas=0001&fechaDocumentoDesde=2017-06-01&fechaDocumentoHasta=2018-06-18');
    return ORDER_DETAIL;
  }
  getDeliveryNotes(numDocumentoComercial){
    var DELIVERY_NOTES = this.http.get('http://localhost:8080/salesorders/'+numDocumentoComercial+'/deliverynotes');
    return DELIVERY_NOTES;
  }
  getDeliveryNoteDetail(numDocumentoComercial){
    var DELIVERY_NOTE_DETAIL = this.http.get('http://localhost:8080/deliverynotes/'+numDocumentoComercial);
    return DELIVERY_NOTE_DETAIL;

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
    return ["numCliente", "email"]
  }
  getOrderColumns(): string[] {
    return ["numMaterial", "numDocumentoComercial", "statusDocumento", "cantidadPedido"]
  }
  getOrderListColumns(): string[] {
    return ["referencia", "estado", "fecha", "descripcion"]
  }
}



