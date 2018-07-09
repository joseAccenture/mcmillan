import { Injectable} from '@angular/core';
import { ConsoleService} from './console.service';
@Injectable()
export class ConsoleDataService {
  alert_email: any;
  alert_text: string;
  alert_title: string;
  AdmiteReserva: boolean = false;
  userIdToDelete: string;
  alertText: string;
  Admin: boolean;
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
  firstclientToRepresent: any;
  clientsToRepresent: any;
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
      this.alertTitle="";
      this.alertTitle = "";
      this.alertText = "";
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
     
       this.alert_email = email;
       this.alert_title = "Pedido registrado en Sap";
       this.alert_text = "Se ha registrado el pedido:";
      var btnCancel = document.getElementById('btncancel');
      var btn = document.getElementById('btnSuccess');
      var equis = document.getElementById('equis');
      var sapCode = document.getElementById('SAPCodeInput');
      btnCancel.style.display = "block";
      btn.style.display = "none";
      sapCode.style.display = "none";
      equis.style.display = "block";
      this.userIdToDelete = email;
    }
    if (error ==="login"){
      this.alertTitle = "Selección del cliente para operar"; 
      this.alertText = email; 
      var btn = document.getElementById('btnSuccess');
      var btnCancel = document.getElementById('btncancel');
      var equis = document.getElementById('equis');
      btn.style.display = "block";
      btnCancel.style.display = "none";
      equis.style.display = "none";
    }
    this.openModal('myModal');
   } 
  public clientList(){
    this.dataTable = [];
    if (this.user["tipoCliente"] === "Administrador" ){
      this.Admin = true;
    }else{
      this.Admin = false;
    }

    this.alertText = "para cambiar de cliente introduzca código y pulse buscar:"
    this.representados = this.user["listaRepresentados"];
    for (var i = 0; i <= this.representados.length-1; i++){
      if (this.dataTable.length !=0){
        if (this.user["tipoCliente"] === "jefe de delegación"){
          this.dataTable.push(
            {"numCliente": this.representados[i].numCliente,
            "nombre2": this.representados[i].nombre2
          }   
          )
        }else{
          this.dataTable.push(
            {"numCliente": this.representados[i].codigoSap,
            "nombre2": this.representados[i].nombre
          }   
          )
        }
           
      }else{
        if (this.user["tipoCliente"] === "jefe de delegación"){
          this.dataTable =[
            {"numCliente": this.representados[i].numCliente,
            "nombre2": this.representados[i].nombre2
          }
          ] 
        }else{
          this.dataTable =[
            {"numCliente": this.representados[i].codigoSap,
            "nombre2": this.representados[i].nombre
          }
          ] 
        }
        
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
  public deleteZerosInCode(stringcode){
     var parseCode = parseInt(stringcode,10);
     return parseCode.toString();
  }
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
 public callClientByZoneService(zone){
  this.ConsoleService.getCLientsByZone(zone)
  .subscribe(resp => {
    this.user["listaRepresentados"] = resp["datosCliente"];
    this.callClientService(this.user["listaRepresentados"][0].numCliente);
    console.log(resp, "byZoneResponse");
  },
    error => {
      console.log(error, "error");
    });
 }
  public callClientService(codigo){
    this.FuncionesInterlocutor = []; 
    this.orderKind = [];
    this.contacts = [];
    this.ConsoleService.getCLients(codigo)
    .subscribe(resp => {
   this.client =  resp;
   this.codigoSap = this.deleteZerosInCode(this.client["detalleCliente"].numCliente);
   this.client["detalleCliente"].numCliente = this.deleteZerosInCode(this.client["detalleCliente"].numCliente);
   for (var i = 0; i < (this.client["sociosCliente"].length); i++){
     this.client["sociosCliente"][i].numCliente = this.deleteZerosInCode(this.client["sociosCliente"][i].numCliente);
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
   this.firstclientToRepresent = this.deleteZerosInCode(this.client["detalleCliente"].numCliente);
   this.user["nombre"] =  this.client["detalleCliente"].nombre2;
   this.user["codigoSap"] =  this.deleteZerosInCode(this.client["detalleCliente"].numCliente);
  this.addresses = [];
  if (this.client["contactos"].length >0){
    this.contacts = this.client["contactos"];
  }else{
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
   public getClientActive(rowData){
    this.FuncionesInterlocutor = []; 
    this.orderKind = [];
    this.contacts = [];
    if (rowData.tipoCliente !== "Jefe de delegación"){
      if (rowData.codigoSap === "" && rowData.tipoCliente ==="Administrador"){
        var alertTipe = "login";
        var msg = "Para continuar, introduzca el código Sap del cliente a representar";
        this.alertFunction(alertTipe, msg);
        return;
      }
      if (!rowData.numCliente){
        var numCliente = rowData.codigoSap;
      }else{
        var numCliente = rowData.numCliente;
      }
      this.callClientService(numCliente);
    }
    this.callClientByZoneService(rowData.zona);
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
    this.getClientActive(this.user);
    }
}
