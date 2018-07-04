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
  Origin: string;
  backendUrl: any;
  URLactual: string;
  // public static backendUrl;

  DoRedirect() {
    this.Origin =  window.location.origin;
    this.URLactual = window.location.pathname.slice(1).toString();
    if (this.URLactual.includes('macmillanEducation') && !this.Origin.includes('http://localhost:8080')){
      this.backendUrl = '/macmillanBackend';
    }else{
      this.backendUrl = 'http://localhost:8080'
    }

  }

  
  
   

  constructor(private http : HttpClient) {}
  


  getCLients(id: number) {
    this.DoRedirect();
        var CLIENTS = this.http.get(this.backendUrl+'/customers/'+id, httpOptions);
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
  submitOrder(line) {
    this.DoRedirect();
    var ORDER = this.http.post(this.backendUrl+'/orders', line);
   return ORDER;
 } 
 submitOrderToSap(line) {
  this.DoRedirect();
  var ORDER = this.http.post(this.backendUrl+'/salesorders/', line);
 return ORDER;
} 
  getOrdersDraft() {
    this.DoRedirect();
 var ORDER_LIST = this.http.get(this.backendUrl+'/orders');
     return ORDER_LIST;
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
  delOrder(idObj){ 
    this.DoRedirect();
    let headers = new HttpHeaders(); 
    headers.append( 'Content-Type', 'application/json'); 
    headers.append('Access-Control-Allow-Origin', '*'); 
      var COMPLETEORDER = this.http.delete(this.backendUrl+'/orders/'+ idObj, {headers: headers}); 
      return COMPLETEORDER; 
   } 
}



