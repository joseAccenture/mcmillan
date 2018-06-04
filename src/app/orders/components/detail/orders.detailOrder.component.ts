import { Component, OnInit } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';

@Component({
  selector: 'order-detailorder-component',
  templateUrl: './orders.detailOrder.component.html',
  styleUrls: ['./orders.detailOrder.component.css'],
  providers: [ConsoleService]
})
export class DetailOrderComponent implements OnInit{
  clients: void;
  // @Input() columns: string[];
  data: any = []
  columns: void;
  constructor(private ConsoleService: ConsoleService) { }
 
  ngOnInit() {
    this.clients = this.orderDetail();
  }

  orderDetail() {
    try {
      this.ConsoleService.getOrders()
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
