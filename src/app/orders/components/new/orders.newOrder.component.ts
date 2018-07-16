import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import { ConsoleDataService } from '../../../console/service/consoleData.service';
import { CommonTableService } from '../../../common/table/service/common-table.service';
import { IMyDpOptions, IMyDateModel } from 'mydatepicker';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { NullInjector } from '@angular/core/src/di/injector';
import { DatePipe } from '@angular/common';
import {Observable} from 'rxjs';


@Component({
  selector: 'order-neworder-component',
  templateUrl: './orders.newOrder.component.html',
  styleUrls: ['./orders.newOrder.component.css']
})



export class NewOrderComponent implements OnInit {
  selectedValue: any;
  Change: boolean = false;
  key: any;
  addresses: any;
  btnSendDisabled: boolean;
  btnAddDisabled: boolean;
  pending: boolean = false;
  orderToedit: Params;
  date: Date;
  // nomFis = new FormControl('', Validators.required);
  // dirEnt = new FormControl('', Validators.required);
  // cif = new FormControl('', Validators.required);
  fechaSelected = new FormControl('', Validators.required); 
  fechaFromPicker = new FormControl('', Validators.required); 
  adddressFromSelect = new FormControl('', Validators.required); 
  // addressSelected = new FormControl('', Validators.required); 
  addressSelected: string;
  // dataUser;
  constructor(private ConsoleService: ConsoleService, private ConsoleDataService: ConsoleDataService, private CommonTableService: CommonTableService, private Router: Router, private activatedRoute: ActivatedRoute, private datePipe: DatePipe) { }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
  }
  // public model: any = { date: { year: 2018, month: 10, day: 9 } };
  client: void;
  @Input() columns: string[];
  @Input() dataUser: any;
  public formGroup;
  materials: void;

  data;
  noLine;
  
  ngOnInit() {
    // this.client = this.ConsoleDataService.client;
    
    
    if (this.ConsoleDataService.client.detalleCliente.bloqueoCentralPedidoCliente !=="" ||
    this.ConsoleDataService.client.detalleCliente.textoBloqueoCentralPedidoCliente !=="" ||
    this.ConsoleDataService.client.detalleCliente.bloqueoPedidoCliente !=="" ||
    this.ConsoleDataService.client.detalleCliente.textoBloqueoPedidoCliente !==""){
      var error = "bloqueo";
      var msg= "Cliente con bloqueo";
      this.ConsoleDataService.alertFunction(error, msg);
      return;
    }
    this.ConsoleDataService.dataLine = [];
    this.materials = this.getMaterials();
    this.date = new Date();
    this.date.setDate(this.date.getDate());
    this.activatedRoute.queryParams.subscribe(params => {
      // this.orderToedit = params;
      // this.clients = this.orderHeader(this.orderToedit); 
      if (params.fromUrl ==="pending"){
        this.pending = true;
        // this.ConsoleDataService.dataLine = this.ConsoleDataService.ordertoDelete["lineasPedido"];
        this.ConsoleDataService.dataLine = this.ConsoleDataService.ordertoDelete;
        this.selectedValue = this.ConsoleDataService.ordertoDelete.direccionEntrega;
        var length = this.ConsoleDataService.dataLine['lineasPedido'].length;
        this.ConsoleDataService.lineLength = length;
          for (var i=0; 1<= length; i++){
        // //   var linea = this.ConsoleDataService.dataLine[i];
        // //   linea["idlinea"] = i;
        this.ConsoleDataService.dataLine['lineasPedido'][i]['idLine'] = i;
          }
       
        // this.setUnitsFromDraft(this.ConsoleDataService.dataLine)
      }else{
            this.btnSendDisabled =  true;
            this.btnAddDisabled =  false;
      }
  });
  if ( this.orderToedit.fromUrl && this.orderToedit.fromUrl !=="pending"){
    this.ConsoleDataService.dataLine = [];
  }
    
    
    // this.columns = this.ConsoleService.getOrderColumns(); 
    // this.users = this.userDetail();
     this.noLine = false;
  }
  onDateChanged(event: IMyDateModel) {
    $("#gridRadios2")[0]["checked"] = true;
    $("#gridRadios1")[0]["checked"] = false;
    var numInput = $(".lineSum");
    for (var i =0;i<numInput.length; i++){
      if (numInput[i]["value"] !==""){
        this.btnAddDisabled = false;
        this.btnSendDisabled = false; 
      }
    }
   
}
toggleRadio(){
  $("input.selection")[0]['value'] = null;
}
  delLine(rowData){
    var index =  this.ConsoleDataService.dataLine.indexOf(rowData);
    this.ConsoleDataService.dataLine.splice(index, 1);
    this.btnAddDisabled = false;
  }
   addLine(materialSelected) {
    this.btnAddDisabled = true;
    this.btnSendDisabled = true;
    if (materialSelected.tipoMaterial === "D"){
      var material = "SI";
    }else{
      material = "NO";
    }
      if (this.Change){
        var socio = this.ConsoleDataService.adddressFromSelect;

      }else if (this.ConsoleDataService.addresses.length>0){
          socio = this.ConsoleDataService.addresses[0].numero;
    }else{
          socio = this.ConsoleDataService.user["codigoSap"];
    }
    if (this.ConsoleDataService.dataLine.length<= 0){
      this.ConsoleDataService.dataLine =[
        {
          descCorta: materialSelected.descCorta,
          ean: materialSelected.ean,
          tipoMaterial: material
        }
      ]
      this.ConsoleDataService.dataLineToSend =[
        {
          idMaterial: materialSelected.id,
          unidades: null
        }
      ]
      this.ConsoleDataService.dataLineToSendSap =[
        {
          numDeMaterial: materialSelected.numMaterial,
          cantidad: null
        }
      ]
      this.ConsoleDataService.dataLineToSendSapSocio =[
        {
          numCliente:  this.ConsoleDataService.user["codigoSap"],
          funcionInterlocutor: "AG"
        },
        {
          numCliente:  socio,
          funcionInterlocutor: "WE"
        }
      ]
      this.noLine = true;
    }else{
      if (materialSelected.tipoMaterial === "D"){
        var material = "SI"
      }else{
        material = "NO"
      }
      if (!this.pending){
        this.ConsoleDataService.dataLine.push(
          {
            descCorta: materialSelected.descCorta,
            ean: materialSelected.ean,
            idLine: this.ConsoleDataService.dataLine.length,
            tipoMaterial: material
          }
        )
        this.ConsoleDataService.dataLineToSend.push(
          {
            idMaterial: materialSelected.id,
            unidades: null
          }
        )    
        this.ConsoleDataService.dataLineToSendSap.push(
          {
            numDeMaterial: materialSelected.numMaterial,
            cantidad: null
          }
        )   
        this.ConsoleDataService.dataLineToSendSapSocio.push(
          {
            numCliente: this.ConsoleDataService.user["codigoSap"],
            funcionInterlocutor: "AG"
          }
        ) 
      }else{
        this.ConsoleDataService.dataLine["lineasPedido"].push(
          {
            descCorta: materialSelected.descCorta,
            ean: materialSelected.ean,
            idLine: this.ConsoleDataService.dataLine.length,
            tipoMaterial: material
          }
        )
        this.ConsoleDataService.dataLineToSend["lineasPedido"].push(
          {
            idMaterial: materialSelected.id,
            unidades: null
          }
        )    
        this.ConsoleDataService.dataLineToSendSap["lineasPedido"].push(
          {
            numDeMaterial: materialSelected.numMaterial,
            cantidad: null
          }
        )   
        this.ConsoleDataService.dataLineToSendSapSocio["lineasPedido"].push(
          {
            numCliente: this.ConsoleDataService.user["codigoSap"],
            funcionInterlocutor: "AG"
          }
        ) 
      }
          
         
    }
  }
  remove(item, line) {
    var elem = document.querySelectorAll(item);
    // for(var i=0; i<elem.length; i++){
      var del = elem[line];del.parentNode.removeChild(del);
    // }
    }
   ChangeLineValue(rowData) {
    var capa = document.getElementsByClassName("units");
      capa[rowData.idLine+1].innerHTML = " <input type='number' min='1' class='lineSum'>";
    // this.remove('units', rowData.idLine);
    
  }
  getMaterials() {
    try {
      this.CommonTableService.getMaterials()
        .subscribe(resp => {
          console.log(resp, "clients");
          this.data = resp
          // this.lineToAdd.emit(this.data);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }

 setUnitsToDraft(type){
  var parametros=[];
  $("table tbody tr").each(function(i,e){
    
      $(this).find("td").each(function(index, element){ 
          if(index != 0){
          var td = {};
                td["cantidad"] = $(this).find(".lineSum").val();
                if ( td["cantidad"] !=undefined){
                  // if (parametros.length > 0){
                    parametros.push(td);
                  // }else{
                  //   parametros = [td];
                  // }
                
                }     
          }
      });
  });
  if (type === "orderToDraft"){
    if (this.pending){
      var thisArray = this.ConsoleDataService.ordertoDelete['lineasPedido'];
      for (var i =0; i < (parametros.length); i++){
        thisArray[i].unidades = parametros[i].cantidad
      }
      for (var z = 0; z< thisArray.length; z++){
         thisArray[z].unidades = thisArray[z].unidades.toString(); 
      }
    }else{
      thisArray = this.ConsoleDataService.dataLineToSend;
      for (var i =0; i < (thisArray.length); i++){
        thisArray[i].unidades = parametros[i].cantidad
      }
    }
    
  }else{
     thisArray = this.ConsoleDataService.dataLineToSendSap;
     if (this.pending){
       if (parametros.length > 0){
        for (var i =0; i < (thisArray.length); i++){
          thisArray[i].unidades = parametros[i].cantidad
        }
       }
      
     }else{
      for (var i =0; i < (thisArray.length); i++){
        thisArray[i].cantidad = parametros[i].cantidad
      }
     }
    
  }
  
 }
 dateToSend(){
   if (this.fechaSelected.value === '0' || this.fechaSelected.value === ''||this.fechaSelected.value === 0){
    // var entregaInmediata = this.date.toString().split("/").reverse().join("-");
    var entregaInmediata = this.datePipe.transform(this.date,"yyyy-MM-dd");
     return entregaInmediata;
   }else{
    var entregaPref = this.fechaFromPicker.value.formatted.split("/").reverse().join("-");
    return entregaPref
   }
 }
  SendToDraft() {
    var lineas;
    if (!this.pending){
      lineas = this.ConsoleDataService.dataLineToSend;
    }else{
      this.setUnitsToDraft("orderToDraft");
      lineas = this.ConsoleDataService.ordertoDelete['lineasPedido'];
    }
      if (!this.pending){
        let order =
      {
          "idUser": this.ConsoleDataService.user["id"],
          "codigoSap": this.ConsoleDataService.client["detalleCliente"].numCliente,
          "nombre": this.ConsoleDataService.client["detalleCliente"].nombre1,
          "cif": this.ConsoleDataService.client["detalleCliente"].nif,
          "direccion": this.ConsoleDataService.address,
          "email":  this.ConsoleDataService.client["detalleCliente"].email,
          "telefono": this.ConsoleDataService.client["detalleCliente"].telefono,
          "condicionPago": this.ConsoleDataService.client["detalleCliente"].claveCondicionesDePago,
           "viaPago": this.ConsoleDataService.client["detalleCliente"].textoViasDePago,
          "tipoCliente": this.ConsoleDataService.client["detalleCliente"].clasificacionCliente,
          "ccc": this.ConsoleDataService.client["detalleCliente"].cuentaBancaria,
          "personaContacto": "",
          "direccionEntrega": this.ConsoleDataService.client["detalleCliente"].calleYNumero,
          "tipoFactura": this.ConsoleDataService.client["detalleCliente"].tipoFacturaImpresa,
           "fecha": this.dateToSend(),
           "lineasPedido": lineas,
      }
        try {
          this.ConsoleService.submitOrder(order)
            .subscribe(resp => {
              console.log(resp, "clients");
              this.data = resp
              this.ConsoleDataService.dataLine = [];
              this.ConsoleDataService.dataLineToSend = [];
              this.ConsoleDataService.dataLineToSendSap = [];
              this.Router.navigate(["/pendingOrder"]);

            },
              error => {
                console.log(error, "error");
              })
        } catch (e) {
          console.log(e);
        }
      }else{
        let order =
      {
          "idUser": this.ConsoleDataService.user["id"],
          "codigoSap": this.ConsoleDataService.client["detalleCliente"].numCliente,
          "nombre": this.ConsoleDataService.client["detalleCliente"].nombre1,
          "cif": this.ConsoleDataService.client["detalleCliente"].nif,
          "direccion": this.ConsoleDataService.address,
          "email":  this.ConsoleDataService.client["detalleCliente"].email,
          "telefono": this.ConsoleDataService.client["detalleCliente"].telefono,
          "condicionPago": this.ConsoleDataService.client["detalleCliente"].claveCondicionesDePago,
           "viaPago": this.ConsoleDataService.client["detalleCliente"].textoViasDePago,
          "tipoCliente": this.ConsoleDataService.client["detalleCliente"].clasificacionCliente,
          "ccc": this.ConsoleDataService.client["detalleCliente"].cuentaBancaria,
          "personaContacto": "",
          "direccionEntrega": this.ConsoleDataService.client["detalleCliente"].calleYNumero,
          "tipoFactura": this.ConsoleDataService.client["detalleCliente"].tipoFacturaImpresa,
           "fecha": this.dateToSend(),
           "lineasPedido": lineas,
           "id":this.ConsoleDataService.ordertoDelete.id
      }
        try {
          this.ConsoleService.updateOrder(order)
            .subscribe(resp => {
              console.log(resp, "clients");
              this.data = resp
              this.ConsoleDataService.dataLine = [];
              this.ConsoleDataService.dataLineToSend = [];
              this.ConsoleDataService.dataLineToSendSap = [];
              this.Router.navigate(["/pendingOrder"]);

            },
              error => {
                console.log(error, "error");
              })
        } catch (e) {
          console.log(e);
        }  
      }
      
        
  }
  delOrder(){
    this.ConsoleService.delOrder(this.ConsoleDataService.ordertoDelete.id) 
    .subscribe(resp => { 
      console.log(resp, "orders"); 
      this.data = resp
    }, 
      error => { 
        console.log(error, "error"); 
      }) 
} catch (e) { 
  console.log(e); 
} 
  onChange(event){
    if($("input.selection")[0]['value'] !==null){
      this.btnAddDisabled = false;
    this.btnSendDisabled = false;
    }
  }
  onChangeDir(event){
    this.Change = true;
    this.ConsoleDataService.adddressFromSelect = event.target.value.split(': ')[0];  
  } 
  addlinesToDraft(){
    if (this.pending){
      this.ConsoleDataService.dataLineToSendSap = this.ConsoleDataService.ordertoDelete["lineasPedido"];
      this.setUnitsToDraft("sap");
    }else{
      this.setUnitsToDraft("sap");
    }
   
  }
  SendToSap() {
    this.addlinesToDraft();
    var FechaPedido = this.datePipe.transform(this.date,"yyyy-MM-dd");
    // this.setUnitsToDraft("Sap");
    let order = {
      "pedidoCabezera":{
        "numCliente": this.ConsoleDataService.client["detalleCliente"].numCliente,
        "fechaPedido": FechaPedido,
        "fechaPreferenteEntrega":  this.dateToSend(),
        "email": this.ConsoleDataService.user["email"]
      },
    "pedidoItems": this.ConsoleDataService.dataLineToSendSap,
    "pedidoSocios": this.ConsoleDataService.dataLineToSendSapSocio
    }
    var source = this.ConsoleService.submitOrderToSap(order);
    var subscription = source
            .subscribe(
              resp => this.ConsoleDataService.alertFunction(100, resp),
              err =>  console.log(err)
            );
          }
}

