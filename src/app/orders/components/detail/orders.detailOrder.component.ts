import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'order-detailorder-component',
  templateUrl: './orders.detailOrder.component.html',
  styleUrls: ['./orders.detailOrder.component.css'],
  providers: [ConsoleService]
})
export class DetailOrderComponent implements OnInit{
  orderToedit: string;
  clients: void;
  // @Input() columns: string[];
  data: any = []
  columns: void;
  constructor(private ConsoleService: ConsoleService, private activatedRoute: ActivatedRoute) { }
 

    ngOnInit() {  
     
      this.activatedRoute.queryParams.subscribe(params => {
          var orderToedit = params;
          var orderRef = orderToedit.orderToedit;
          console.log("order REF: " + orderRef);
          this.clients = this.orderDetail(orderRef); 
      });
      // this.getUSertoEdit(this.codigoSap);
  }

  orderDetail(orderRef) {
    try {
      this.ConsoleService.getOrders(orderRef)
        .subscribe(resp => {
          console.log(resp, "ordersDetail");
          this.data = resp

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
