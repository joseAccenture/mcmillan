import { Injectable} from '@angular/core';
import { ConsoleService} from './console.service';

@Injectable()
export class ConsoleDataService {

  static user: any;
  client: any;
  dataTable: any;
  data: any;
  codigoSap: any;
  clientsNameList: Object;
  dataline: Object;
  user: Object = {};
  dataLine = [];
  dataLineToSend = [];
  dataLineToSendSap = [];
  firstclientToRepresent = [];
  clientsToRepresent = [];
  constructor(private ConsoleService: ConsoleService) { }
  
        
   
  public clientList(){
     this.ConsoleService.getCLients(this.codigoSap)
     .subscribe(resp => {
    this.dataTable =  resp["sociosCliente"];
    this.firstclientToRepresent = resp["detalleCliente"].numCliente;
    },
      error => {
        console.log(error, "error");
      });
   }
   public getClientActive(SapCode){
    this.ConsoleService.getCLients(SapCode)
    .subscribe(resp => {
   this.client =  resp;
   if (this.client.detalleCliente.codigoSap){
    this.firstclientToRepresent = this.client.codigoSap;
   }else{
    this.firstclientToRepresent = this.client["detalleCliente"].numCliente;
   }
  

   },
     error => {
       console.log(error, "error");
     });
  }
  public userActive(data){
    if (!data.numCliente){
      this.user = data;
      this.codigoSap = data.codigoSap;
    }
    // first time called
    this.ConsoleService.getCLients(this.codigoSap)
     .subscribe(resp => {
    // this.client =  resp["detalleCliente"];
    this.client =  resp
    },
    error =>{
      console.log(error, "error_clients")
    });
    if (data["representados"]){
      this.clientsToRepresent = data["representados"].split(',');
      this.firstclientToRepresent = data["representados"].split(',')[0];
    }else{
      this.firstclientToRepresent = data["codigoSap"];
    }
   
  }
  
    
}
