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
  public orderToedit: object;
  clients: void;
public pending = false;
  // @Input() columns: string[];
  data: any = []
  columns: void;
  constructor(private ConsoleService: ConsoleService, private ConsoleDataService: ConsoleDataService, private activatedRoute: ActivatedRoute) { }
 

    ngOnInit() {  
     
      this.activatedRoute.queryParams.subscribe(params => {
          this.orderToedit = params;
          this.clients = this.orderHeader(); 
      });
      // this.getUSertoEdit(this.codigoSap);
  }

  orderHeader() {
    try {
      this.ConsoleService.getCLients(40)
        .subscribe(resp => {
          console.log(resp, "clientDetail");
          this.data = resp["detalleCliente"];
          this.data.fecha = this.orderToedit["fechaDocumento"];

        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  ChangeClient(i) {
    this.data.splice(i, 1);
  }
}
