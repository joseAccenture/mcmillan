import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import { ConsoleDataService } from '../../../console/service/consoleData.service';
import { CommonTableService } from '../../../common/table/service/common-table.service';
import { IMyDpOptions } from 'mydatepicker';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { NullInjector } from '@angular/core/src/di/injector';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'order-neworder-component',
  templateUrl: './orders.newOrder.component.html',
  styleUrls: ['./orders.newOrder.component.css']
})



export class NewOrderComponent implements OnInit {
  pending: boolean = false;
  orderToedit: Params;
  date: Date;
  // nomFis = new FormControl('', Validators.required);
  // dirEnt = new FormControl('', Validators.required);
  // cif = new FormControl('', Validators.required);
  fechaSelected = new FormControl('', Validators.required); 
  fechaFromPicker = new FormControl('', Validators.required); 
  // dataUser;
  constructor(private ConsoleService: ConsoleService, private ConsoleDataService: ConsoleDataService, private CommonTableService: CommonTableService, private Router: Router, private activatedRoute: ActivatedRoute, private datePipe: DatePipe) { }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  }
  client: void;
  @Input() columns: string[];
  @Input() dataUser: any;
  public formGroup;
  materials: void;

  data;
  noLine;
  
  ngOnInit() {
    // this.client = this.ConsoleDataService.client;
    this.ConsoleDataService.dataLine = [];
    this.materials = this.getMaterials();
    this.date = new Date();
    this.date.setDate(this.date.getDate());
    this.activatedRoute.queryParams.subscribe(params => {
      // this.orderToedit = params;
      // this.clients = this.orderHeader(this.orderToedit); 
      if (params.fromUrl ==="pending"){
        this.pending = true;
        this.ConsoleDataService.dataLine = this.ConsoleDataService.ordertoDelete["lineasPedido"];
        var length = this.ConsoleDataService.dataLine.length;
          for (var i=0; 1<= length; i++){
        // //   var linea = this.ConsoleDataService.dataLine[i];
        // //   linea["idlinea"] = i;
        this.ConsoleDataService.dataLine[i]["idLine"] = i;
          }
       
        // this.setUnitsFromDraft(this.ConsoleDataService.dataLine)
      }
  });
  if ( this.orderToedit.fromUrl !=="pending"){
    this.ConsoleDataService.dataLine = [];
  }
    
    
    // this.columns = this.ConsoleService.getOrderColumns(); 
    // this.users = this.userDetail();
     this.noLine = false;
  }
  addLine(materialSelected) {
    if (this.ConsoleDataService.dataLine.length<= 0){
      this.ConsoleDataService.dataLine =[
        {
          descCorta: materialSelected.descCorta,
          ean: materialSelected.ean,
          tipoMaterial: materialSelected.tipoMaterial
        }
      ]
      this.ConsoleDataService.dataLineToSend =[
        {
          idMaterial: materialSelected.id,
          unidades: 1
        }
      ]
      this.ConsoleDataService.dataLineToSendSap =[
        {
          numDeMaterial: materialSelected.numMaterial,
          unidades: 1
        }
      ]
      this.ConsoleDataService.dataLineToSendSapSocio =[
        {
          numCliente:  this.ConsoleDataService.user["codigoSap"],
          funcionInterlocutor: "AG"
        }
      ]
      this.noLine = true;
    }else{
      this.ConsoleDataService.dataLine.push(
            {
              descCorta: materialSelected.descCorta,
              ean: materialSelected.ean,
              idLine: this.ConsoleDataService.dataLine.length,
              tipoMaterial: materialSelected.tipoMaterial
            }
          )
          this.ConsoleDataService.dataLineToSend.push(
            {
              idMaterial: materialSelected.id,
              unidades: 1
            }
          )    
          this.ConsoleDataService.dataLineToSendSap.push(
            {
              numDeMaterial: materialSelected.numMaterial,
              unidades: 1
            }
          )   
          this.ConsoleDataService.dataLineToSendSapSocio.push(
            {
              numCliente: this.ConsoleDataService.user["codigoSap"],
              funcionInterlocutor: "AG"
            }
          )      
         
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
    this.remove('units', rowData.idLine);
    
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
  // setUnitsFromDraft(lines){
  //   this.ConsoleDataService["unidades"] = "1";
  //   // var capa = document.getElementById("unitContainer");
  //   // var input = document.createElement("input");
  //   // for (var i =0; i< lines.length; i++){
  //   //   var inputClass = "inputClass_" + i;
  //   //   $(this).find("input."+inputClass).html(lines[i].unidades);
  //   //   this.ConsoleDataService["unidades"] = lines[i].unidades;

  //   //   i++
  //   // }
    
  // //   $("table tbody tr").each(function(i,e){
  // //     for (var i =0; i< lines.length; i++){
  // //       $(this).find("input.lineSum").html(lines[i].unidades);
  // //     }
  // // }
  // }
 setUnitsToDraft(type){
  var parametros=[];
  $("table tbody tr").each(function(i,e){
    
      $(this).find("td").each(function(index, element){ 
          if(index != 0){
          var td = {};
                td["unidades"] = $(this).find("input.lineSum").val();
                if ( td["unidades"] !=undefined){
                  parametros.push(td);
                }
          }
      });
  });
  if (type === "orderToDraft"){
    var thisArray = this.ConsoleDataService.dataLineToSend;
  }else{
    var thisArray = this.ConsoleDataService.dataLineToSendSap;
  }
  for (var i =0; i < (thisArray.length); i++){
    thisArray[i].unidades = parametros[i].unidades
  }
 }
 dateToSend(){
   if (this.fechaSelected.value === '0'){
     var entregaInmediata = this.datePipe.transform(this.date,"yyyy-MM-dd");
     return entregaInmediata
   }else{
    var entregaPref = this.datePipe.transform(this.fechaFromPicker.value.formatted,"yyyy-MM-dd");
    return entregaPref
   }
 }
  SendToDraft() {
    this.setUnitsToDraft("orderToDraft");
    var lineas;
    if (this.pending){
      lineas = this.ConsoleDataService.ordertoDelete;
    }else{
      lineas = this.ConsoleDataService.dataLineToSend;
    }
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
           "lineasPedido": lineas
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
  }
  SendToSap() {
    var FechaPedido = this.datePipe.transform(this.date,"yyyy-MM-dd");
    this.setUnitsToDraft("Sap");
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
        try {
          this.ConsoleService.submitOrderToSap(order)
            .subscribe(resp => {
              console.log(resp, "clients");
              this.data = resp
              if (this.data.pedidoDocumentos[0].numDocumentoVentas){
                var registro = this.data.pedidoDocumentos[0].numDocumentoVentas;
                this.ConsoleDataService.alertFunction(100, registro);
              }
              // this.Router.navigate(["/ordersList"]);
              // this.lineToAdd.emit(this.data);
            },
              error => {
                console.log(error, "error");
              })
        } catch (e) {
          console.log(e);
        }
  }
  // ChangeClient(i) {
  //   this.data.splice(i, 1);
  // }
}

