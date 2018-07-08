import { Injectable} from '@angular/core';
import { ConsoleService} from './console.service';
@Injectable()
export class ConsoleDataService {
  AdmiteReserva: boolean = false;
  userIdToDelete: string;
  alertText: string;
  alertTitle: string;
  alertEmail: string;
  sujetaARecargoEquival: boolean;
  orderslist: Object;
  userlist: Object;
  FuncionesInterlocutor= [];
  orderKind = [];
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
  constructor(private ConsoleService: ConsoleService) {
   }
    public openModal(id: string){
      var elemento = document.getElementById(id);
      elemento.style.display = "block";
  }  
  public closeModal(id: string){
    var elemento = document.getElementById(id);
    elemento.style.display = "none";
}    
  public alertFunction(error, email){
       if (error === 409){
      this.alertEmail = email;
      this.alertTitle = "Usuario ya existente";
      this.alertText = "El usuario seleccionado ya existe en la aplicación. En caso de error póngase en contacto con el administrador.";
      var btn = document.getElementById('btnSuccess');
      btn.style.display = "none";
    }
    if (error === 201){
      this.alertEmail = email;
      this.alertTitle = "Usuario registrado correctamente";
      this.alertText = "Consulte la actualización el listado de Usuarios";
      var btn = document.getElementById('btnSuccess');
      btn.style.display = "block";
    }
    if (error === 200){
      this.alertEmail = email;
      this.alertTitle = "Eliminar usuario";
      this.alertText = "Esta seguro que desea eliminar el usuario con id:";
      var btn = document.getElementById('btnSuccess');
      btn.style.display = "block";
      this.userIdToDelete = email;
    }
    if (error === 100){
      // this.alertEmail = email;
      // this.alertTitle = "Pedido registrado en Sap";
      // this.alertText = "Se ha registrado el pedido:";
      var btn = document.getElementById('btnSuccess');
      btn.style.display = "block";
      this.userIdToDelete = email;
    }
    this.openModal('myModal');
   } 
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
  // eliminateDuplicates(arr) {
  //   var i,
  //     len = arr.length,
  //     out = [],
  //     obj = {};

  //   for (i = 0; i < len; i++) {
  //     obj[arr[i]] = 0;
  //   }
  //   for (i in obj) {
  //     out.push(i);
  //   }
  //   return out;
  // }
   public  orderLines(ordertoDelete){
      this.dataLine = ordertoDelete.lineasPedido;
        var parametros=[];
        $("table tbody tr").each(function(i,e){
            $(this).find("td").each(function(index, element){
                if(index != 0) // ignoramos el primer indice que dice Option #
                {
                var td = {};
                td["unidades"] = $(this).find("input.lineSum").html(ordertoDelete.lineasPedido[(index-1)].unidades);
                
                    if ( td["unidades"] !=undefined){
                      parametros.push(td);
                    }
                }
            });
        });
        return parametros
        
 }
  
   public getClientActive(rowData){
    this.FuncionesInterlocutor = []; 
    this.orderKind = [];
    this.ConsoleService.getCLients(rowData.numCliente)
    .subscribe(resp => {
   this.client =  resp;
   for (var i = 0; i < (this.client["sociosCliente"].length); i++){
    this.FuncionesInterlocutor.push(this.client["sociosCliente"][i].nombre1 +" | "+ this.client["sociosCliente"][i].denominacionFuncionInterlocutor +" | "+ this.client["sociosCliente"][i].calleYNumero);
  }
  if (this.client["detalleCliente"].sujetaARecargoEquival === ""){
    this.sujetaARecargoEquival = false;
  }else {
    this.sujetaARecargoEquival = true;
  }
 
  var obj = this.client["detalleCliente"];
  for (const prop in obj) {
    if (prop ==="bloqueoCentralEntregaCliente" || prop ==="bloqueoCentralPedidoCliente" || prop ==="bloqueoPedidoCliente"){
      if (obj[prop] ==="10" || obj[prop] === "20"){
        this.AdmiteReserva = false;
      }else{
        this.AdmiteReserva = true;
      }
    }
  }
  // if (this.client["detalleCliente"].bloqueoCentralPedidoCliente ==="10" || this.client["detalleCliente"].bloqueoCentralPedidoCliente ==="20"){
  //   this.AdmiteReserva = true;
  // }else{
  //   this.AdmiteReserva = false;
  // }
  this.firstclientToRepresent = rowData.numCliente;
  this.user["nombre"] = rowData.nombre2;
  this.user["codigoSap"] = rowData.numCliente;
  this.addresses = [];
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
    this.orderKind.push("Factura por mail")
  }else if (this.client["detalleCliente"].impresionFactura ==="X"){
    this.orderKind.push("Impresión de factura")
  }else if(this.client["detalleCliente"].presentacionFacturaElectronica ==="X"){
    this.orderKind.push("Factura electronica")
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
      if (this.clientsToRepresent.length>1){
        this.firstclientToRepresent = this.user["listaRepresentados"][0].codigoSap + " " + this.user["listaRepresentados"][0].nombre;
      }else{
        this.firstclientToRepresent = "";
            }
    
    }
    // first time called
    this.ConsoleService.getCLients(this.codigoSap)
     .subscribe(resp => {
    this.client =  resp
    this.FuncionesInterlocutor = [];
    this.addresses = [];
    if (this.client["detalleCliente"].enviarEmailFactura ==="X"){
      this.orderKind.push("Factura por mail")
    }else if (this.client["detalleCliente"].impresionFactura ==="X"){
      this.orderKind.push("Impresión de factura")
    }else if(this.client["detalleCliente"].presentacionFacturaElectronica ==="X"){
      this.orderKind.push("Factura electronica")
    }
    if (this.client["contactos"].length >0){
      this.contacts = [];
      this.contacts = this.client["contactos"];
    }else{
      this.contacts = [];
      this.contacts[0].nombre =["sin persona de contacto"];
    }
    for (var i = 0; i < (this.client["sociosCliente"].length); i++){
      this.FuncionesInterlocutor.push(this.client["sociosCliente"][i].nombre1 +" | "+ this.client["sociosCliente"][i].denominacionFuncionInterlocutor +" | "+ this.client["sociosCliente"][i].calleYNumero);
    }
    if (this.client["detalleCliente"].sujetaARecargoEquival === ""){
      this.sujetaARecargoEquival = false;
    }else {
      this.sujetaARecargoEquival = true;
    }  
    var obj = this.client["detalleCliente"];
    for (const prop in obj) {
      if (prop ==="bloqueoCentralEntregaCliente" || prop ==="bloqueoCentralPedidoCliente" || prop ==="bloqueoPedidoCliente"){
        if (obj[prop] ==="10" || obj[prop] === "20"){
          this.AdmiteReserva = false;
        }else{
          this.AdmiteReserva = true;
        }
      }
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
