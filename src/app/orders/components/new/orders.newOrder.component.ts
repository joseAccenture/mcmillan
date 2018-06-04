import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';

@Component({
  selector: 'order-neworder-component',
  templateUrl: './orders.newOrder.component.html',
  styleUrls: ['./orders.newOrder.component.css']
})


export class NewOrderComponent implements OnInit{
  clients: void;
  @Input() columns: string[];
  data;
  constructor(private ConsoleService: ConsoleService) { }
 
  ngOnInit() {
    this.clients = this.orderDetail();
    this.columns = this.ConsoleService.getOrderColumns(); 
   
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

