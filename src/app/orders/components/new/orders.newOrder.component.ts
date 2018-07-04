import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import { ConsoleDataService } from '../../../console/service/consoleData.service';
import { CommonTableService } from '../../../common/table/service/common-table.service';
import { IMyDpOptions } from 'mydatepicker';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { NullInjector } from '@angular/core/src/di/injector';



@Component({
  selector: 'order-neworder-component',
  templateUrl: './orders.newOrder.component.html',
  styleUrls: ['./orders.newOrder.component.css']
})



export class NewOrderComponent implements OnInit {
  orderToedit: Params;
  date: Date;
  // nomFis = new FormControl('', Validators.required);
  // dirEnt = new FormControl('', Validators.required);
  // cif = new FormControl('', Validators.required);
  fechaSelected = new FormControl('', Validators.required); 
  fechaFromPicker = new FormControl('', Validators.required); 
  // dataUser;
  constructor(private ConsoleService: ConsoleService, private ConsoleDataService: ConsoleDataService, private CommonTableService: CommonTableService, private Router: Router, private activatedRoute: ActivatedRoute) { }
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
    this.materials = this.getMaterials();
    this.date = new Date();
    this.date.setDate( this.date.getDate() + 3 );
    this.ConsoleDataService.dataLine = [];
    this.activatedRoute.queryParams.subscribe(params => {
      this.orderToedit = params;
      // this.clients = this.orderHeader(this.orderToedit); 
  });
    // this.columns = this.ConsoleService.getOrderColumns(); 
    // this.users = this.userDetail();
     this.noLine = false;
  }
  addLine(materialSelected) {
    var i = 0;
    if (!this.noLine){
      this.ConsoleDataService.dataLine =[
        {
          descCorta: materialSelected.descCorta,
          ean: materialSelected.ean
        }
      ]
      this.ConsoleDataService.dataLineToSend =[
        {
          idMaterial: materialSelected.id,
          unidades: i.toString()
        }
      ]
      this.ConsoleDataService.dataLineToSendSap =[
        {
          idMaterial: materialSelected.numMaterial,
          unidades: null
        }
      ]
      this.ConsoleDataService.dataLineToSendSapSocio =[
        {
          numCliente:  this.ConsoleDataService.user["codigoSap"],
          funcionInterlocutor: "AG"
        }
      ]
      this.noLine = true;
      i++;
    }else{
      i++;
      this.ConsoleDataService.dataLine.push(
            {
              descCorta: materialSelected.descCorta,
              ean: materialSelected.ean
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
              idMaterial: materialSelected.numMaterial,
              unidades: null
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
  onChange(addresses) {
    this.ConsoleDataService.address = addresses
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
 setUnits(type){
  var parametros=[];
  $("table tbody tr").each(function(i,e){
      $(this).find("td").each(function(index, element){
          if(index != 0) // ignoramos el primer indice que dice Option #
          {
          var td = {};
          td["unidades"] = $(this).find("input.lineSum").val();
              if ( td["unidades"] !=undefined){
                parametros.push(td);
              }
          }
      });
  });
  if (type === "Draft"){
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
     return this.date
   }else{
    return this.fechaFromPicker.value.formatted
   }
 }
  SendToDraft() {
    this.setUnits("Draft");
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
           "lineasPedido": this.ConsoleDataService.dataLineToSend
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
    this.setUnits("Sap");
    let order = {
      "pedidoCabezera":{
        "numCliente": this.ConsoleDataService.client["detalleCliente"].numCliente,
        "fechaPedido": "2018-01-01",
        "fechaPreferenteEntrega":  "2018-09-09"    
      },
    "pedidoItems": this.ConsoleDataService.dataLineToSendSap,
    "pedidoSocios": this.ConsoleDataService.dataLineToSendSapSocio
    }
        try {
          this.ConsoleService.submitOrderToSap(order)
            .subscribe(resp => {
              console.log(resp, "clients");
              this.data = resp
              this.Router.navigate(["/ordersList"]);
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

