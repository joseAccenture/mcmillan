import { Injectable} from '@angular/core';
import { ConsoleService} from './console.service';

@Injectable()
export class ConsoleDataService {

  client: any;
  dataTable: any;
  data: any;
  codigoSap: any;
  clientsNameList: Object;
  user: Object = {
    email: null,
    nombre: null
  };
  firstclientToRepresent = [];
  clientsToRepresent = [];
  constructor(private ConsoleService: ConsoleService) { }
  public clientList(){
     this.ConsoleService.getCLients(this.codigoSap)
     .subscribe(resp => {
    this.dataTable =  resp["sociosCliente"];
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
    this.client =  resp["detalleCliente"];
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
