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
  backendUrl: any;
  URLactual: string;
  // public static backendUrl;

  DoRedirect() {
    this.URLactual = window.location.pathname.slice(1).toString();
    if (this.URLactual.includes('macmillanBackend')){
      this.backendUrl = '/macmillanBackend';
    }else{
      this.backendUrl = 'http://localhost:8080'
    }

  }

  
  
   

  constructor(private http : HttpClient) {}
  


  getCLients(id: number) {
    this.DoRedirect();
        var CLIENTS = this.http.get('/'+this.backendUrl+'/customers/'+id, httpOptions);
         return CLIENTS;
  }

  getCLientDetail(numCliente) {
    this.DoRedirect();
    const headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Access-Control-Allow-Origin ', 'http://localhost:4200');
    headers.set('Authorization', 'Basic ' + btoa('U23r:MacMillan!1'));
    var CLIENTS = this.http.get  (this.backendUrl+'/customers/'+numCliente, {headers});
    return CLIENTS;
  }
  submitLine(line) {
    this.DoRedirect();
    var LINE = this.http.post(this.backendUrl+'/users', line);
   return LINE;
 } 
  getOrders(id) {
    this.DoRedirect();
 var ORDER_DETAIL = this.http.get(this.backendUrl+'/orders/'+ id, httpOptions);
     return ORDER_DETAIL;
   }

  getOrdersList(fecEnt, fecSal, id) {
    this.DoRedirect();
    var ORDER_DETAIL = this.http.get(this.backendUrl+'/salesorders/customers/'+id+'?numCliente='+id+'&organizacionVentas=0001&fechaDocumentoDesde='+fecEnt+'&fechaDocumentoHasta='+fecSal);
    return ORDER_DETAIL;
  }
  getDeliveryNotes(numDocumentoComercial){
    this.DoRedirect();
    var DELIVERY_NOTES = this.http.get(this.backendUrl+'/salesorders/'+numDocumentoComercial+'/deliverynotes');
    return DELIVERY_NOTES;
  }
  getDeliveryNoteDetail(numDocumentoComercial){
    this.DoRedirect();
    var DELIVERY_NOTE_DETAIL = this.http.get(this.backendUrl+'/deliverynotes/'+numDocumentoComercial);
    return DELIVERY_NOTE_DETAIL;

  }
  getOrdersLines() {
    this.DoRedirect();
    var ORDER_LINES = this.http.get(this.backendUrl+'/lineas');
    return ORDER_LINES;
  }
  getUsersbyId(id) {
    this.DoRedirect();
    var USERS = this.http.get(this.backendUrl+'/users/'+id);
    return USERS;
  }
  getUsers() {
    this.DoRedirect();
    var USERS = this.http.get(this.backendUrl+'/users/');
    return USERS;
  }
  getLogin(userToVal) {
    this.DoRedirect();
    var USERS = this.http.post(this.backendUrl+'/login', userToVal);
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



