import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConsoleDataService } from '../../../console/service/consoleData.service';


@Component({
  selector: 'order-detailorder-component',
  templateUrl: './orders.detailOrder.component.html',
  styleUrls: ['./orders.detailOrder.component.css'],
  providers: [ConsoleService]
})
export class DetailOrderComponent implements OnInit{
  head: any;
  public orderToedit = [];
  clients: void;
public pending = false;
  // @Input() columns: string[];
  data: any = []
  columns: void;
  constructor(private ConsoleService: ConsoleService, private ConsoleDataService: ConsoleDataService, private activatedRoute: ActivatedRoute) { }
 

    ngOnInit() {  
     
      this.activatedRoute.queryParams.subscribe(params => {
          this.orderToedit.push(params);
          // this.clients = this.orderHeader(this.orderToedit); 
      });
       this.orderHeader();
  }

  orderHeader() {
    this.head = {
      "codigoSap": this.ConsoleDataService.client["detalleCliente"].numCliente,
      "cif": this.ConsoleDataService.client["detalleCliente"].nif,
      "nombre2":this.ConsoleDataService.client["detalleCliente"].nombre2,
      "direccionEntrega":this.ConsoleDataService.client["sociosCliente"][0].calleYNumero  
    }
  }
  ChangeClient(i) {
    this.data.splice(i, 1);
  }
}
