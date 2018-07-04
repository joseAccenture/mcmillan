import { Injectable} from '@angular/core';
import { ConsoleService} from './console.service';

@Injectable()
export class ConsoleDataService {

  orderslist: Object;
  userlist: Object;
  direccionesEntrega= [];
  orderKind: string;
  contacts: any;
  addresses: any;
  address: any;
  representados = [];
  static user: any;
  client: any;
  dataTable= [];
  data: any;
  codigoSap: any;
  clientsNameList: Object;
  dataline: Object;
  user: Object = {};
  ordertoDelete;
  dataLine = [];
  dataLineToSend = [];
  dataLineToSendSap = [];
  dataLineToSendSapSocio = [];
  firstclientToRepresent: string;
  clientsToRepresent: string;
  constructor(private ConsoleService: ConsoleService) { }
  
        
   
  public clientList(){
    this.representados = this.user["listaRepresentados"];
    for (var i = 0; i <= this.representados.length-1; i++){
      if (this.dataTable.length !=0){
        this.dataTable.push(
          {"numCliente": this.representados[i].codigoSap,
          "nombre2": this.representados[i].nombre
        }   
        )   
      }else{
        this.dataTable =[
          {"numCliente": this.representados[i].codigoSap,
          "nombre2": this.representados[i].nombre
        }
        ] 
      }
     
    }
    
   }
  eliminateDuplicates(arr) {
    var i,
      len = arr.length,
      out = [],
      obj = {};

    for (i = 0; i < len; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }
   
   public getClientActive(rowData){
    this.direccionesEntrega = []; 
    this.ConsoleService.getCLients(rowData.numCliente)
    .subscribe(resp => {
   this.client =  resp;
   for (var i = 0; i < (this.client["sociosCliente"].length); i++){
    this.direccionesEntrega.push(this.client["sociosCliente"][i].calleYNumero);
    this.direccionesEntrega = this.eliminateDuplicates(this.direccionesEntrega);

  }
  this.firstclientToRepresent = rowData.numCliente;
  this.user["nombre"] = rowData.nombre2;
  this.user["codigoSap"] = rowData.numCliente;
  this.addresses = [""];
  if (this.client["contactos"].length >0){
    this.contacts = [];
    this.contacts = this.client["contactos"];
  }else{
    this.contacts = [];
    this.contacts=[{
      nombre: "Sin Contactos"
    }];
  }
  
  if (this.client["detalleCliente"].enviarEmailFactura ==="X"){
    this.orderKind = "Enviar por mail"
  }else{
    this.orderKind = "No enviar por mail"
  }
  for (var i=0; i < this.client["sociosCliente"].length; i++) {
      if(this.client["sociosCliente"][i].funcionInterlocutor == "WE"){
        this.addresses.push(this.client["sociosCliente"][i].calleYNumero);
      }
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
      this.clientsToRepresent = this.user["listaRepresentados"];
      this.firstclientToRepresent = this.user["listaRepresentados"][0].codigoSap + " " + this.user["listaRepresentados"][0].nombre;
    }
    // first time called
    this.ConsoleService.getCLients(this.codigoSap)
     .subscribe(resp => {
    this.client =  resp
    this.direccionesEntrega = [];
    this.addresses = [""];
    if (this.client["detalleCliente"].enviarEmailFactura ==="X"){
      this.orderKind = "Enviar por mail"
    }else{
      this.orderKind = "No enviar por mail"
    }
    if (this.client["contactos"].length >0){
      this.contacts = [];
      this.contacts = this.client["contactos"];
      for (var i = 0; i < (this.client["sociosCliente"].length); i++){
        this.direccionesEntrega.push(this.client["sociosCliente"][i].calleYNumero);
        this.direccionesEntrega = this.eliminateDuplicates(this.direccionesEntrega);
      }
      
    }else{
      this.contacts = [];
      this.contacts[0].nombre =["sin persona de contacto"];
    }
  for (var i=0; i < this.client["sociosCliente"].length; i++) {
      if(this.client["sociosCliente"][i].funcionInterlocutor == "WE"){
        this.addresses.push(this.client["sociosCliente"][i].calleYNumero);
      }
  }
    },
    error =>{
      console.log(error, "error_clients")
    });
    }
}
