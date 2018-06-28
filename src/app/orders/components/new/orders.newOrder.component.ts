import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import { ConsoleDataService } from '../../../console/service/consoleData.service';
import { CommonTableService } from '../../../common/table/service/common-table.service';
import { IMyDpOptions } from 'mydatepicker';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';


@Component({
  selector: 'order-neworder-component',
  templateUrl: './orders.newOrder.component.html',
  styleUrls: ['./orders.newOrder.component.css']
})



export class NewOrderComponent implements OnInit {
  date: Date;
  // nomFis = new FormControl('', Validators.required);
  // dirEnt = new FormControl('', Validators.required);
  // cif = new FormControl('', Validators.required);
  // fecEnt = new FormControl('', Validators.required); 
  // dataUser;
  constructor(private ConsoleService: ConsoleService, private ConsoleDataService: ConsoleDataService, private CommonTableService: CommonTableService, private Router: Router) { }
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
    this.client = this.ConsoleDataService.client;
    this.materials = this.getMaterials();
    this.date = new Date();
    this.date.setDate( this.date.getDate() + 3 );
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
          unidades: i.toString()
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
              unidades: i.toString()
            }
          )    
          this.ConsoleDataService.dataLineToSendSap.push(
            {
              idMaterial: materialSelected.numMaterial,
              unidades: i.toString()
            }
          )      
         
    }
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

  SendToDraft() {
    let order =
      {
          "idUser": this.ConsoleDataService.user["id"],
          "codigoSap": this.ConsoleDataService.client["numCliente"],
          "nombre": this.ConsoleDataService.client["nombre1"],
          "cif": this.ConsoleDataService.client["nif"],
          "direccion": this.ConsoleDataService.client["calleYNumero"],
          "email":  this.ConsoleDataService.client["email"],
          "telefono": this.ConsoleDataService.client["telefono"],
          "condicionPago": this.ConsoleDataService.client["claveCondicionesDePago"],
           "viaPago": this.ConsoleDataService.client["textoViasDePago"],
          "tipoCliente": this.ConsoleDataService.client["clasificacionCliente"],
          "ccc": this.ConsoleDataService.client["cuentaBancaria"],
          "personaContacto": "",
          "direccionEntrega": this.ConsoleDataService.client["calleYNumero"],
          "tipoFactura": this.ConsoleDataService.client["tipoFacturaImpresa"],
           "fecha": this.date,
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
    let order = {
      "pedidoCabezera":{
        "numCliente": this.ConsoleDataService.client["numCliente"],
        "fechaPedido": this.date,
        "fechaPreferenteEntrega": this.date    
      },
    "pedidoItems": this.ConsoleDataService.dataLineToSendSap,
    "pedidoSocios": this.ConsoleDataService.dataLineToSendSap
    }
        try {
          this.ConsoleService.submitOrderToSap(order)
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
  // ChangeClient(i) {
  //   this.data.splice(i, 1);
  // }
}

