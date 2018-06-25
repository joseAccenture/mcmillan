import { Injectable} from '@angular/core';
import { ConsoleService} from './console.service';

@Injectable()
export class ConsoleDataService {

  dataTable: any;
  data: any;
  codigoSap: any;
  clientsNameList: Object;
  user: Object;
  firstclientToRepresent = [];
  clientsToRepresent = [];
  constructor(private ConsoleService: ConsoleService) { }

  public userActive(data){
    this.user = data;
    this.codigoSap = data.codigoSap;
    
    this.clientsToRepresent = data["representados"].split(',');
    this.firstclientToRepresent = data["representados"].split(',')[0];
    
  }
  public clientList(){
     this.ConsoleService.getCLients(this.codigoSap)
     .subscribe(resp => {
    this.dataTable =  resp["sociosCliente"];
    },
      error => {
        console.log(error, "error");
      });
   }
    
}
