import { Component, OnInit, Input } from '@angular/core';
import { CommonTableOrderService } from '../../service/common-table-order.service';

// import { client } from '../../client';

@Component({
  selector: 'common-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.sass'],
  providers: [CommonTableOrderService]
})

export class OrderTableComponent implements OnInit {
  clients: void;
  // @Input() characters: client[];
  @Input() columns: string[];
  
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



  