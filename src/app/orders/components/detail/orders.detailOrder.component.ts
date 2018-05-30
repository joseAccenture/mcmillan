import { Component, OnInit, Input } from '@angular/core';
import { CommonTableOrderService } from '../../../common/table/service/common-table-order.service';

@Component({
  selector: 'order-detailorder-component',
  templateUrl: './orders.detailOrder.component.html',
  styleUrls: ['./orders.detailOrder.component.css'],
  providers: [CommonTableOrderService]
})
export class DetailOrderComponent implements OnInit{
  clients: void;
  // @Input() characters: client[];
  @Input() columns: string[];
  // i: any;
  row: any = []
  data: any = []
  userdata: any = []
  constructor(private CommonTableOrderService: CommonTableOrderService) { }
 
  ngOnInit() {
    this.clients = this.getClient();
    this.columns = this.CommonTableOrderService.getColumns(); 
   
  }

  getClient() {
    try {
      this.CommonTableOrderService.getCLients()
        .subscribe(resp => {
          console.log(resp, "clients");
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
