import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';
import { Router } from '@angular/router';

// import { client } from '../../client';

@Component({
  selector: 'common-listorder-table',
  templateUrl: './listOrder-table.component.html',
  styleUrls: ['./listOrder-table.component.sass'],
  providers: [ConsoleService]
})

export class ListOrderTableComponent implements OnInit {
  clients: void;
  // @Input() characters: client[];
  @Input() columns: string[];
  
  row: any = []
  data: any = []
  userdata: any = []
  constructor(private ConsoleService: ConsoleService, private router: Router) { }
 
  ngOnInit() {
    this.clients = this.getOrdersList();
    this.columns = this.ConsoleService.getOrderListColumns(); 
  }

  getOrdersList() {
    try {
      this.ConsoleService.getOrdersList()
        .subscribe(resp => {
          console.log(resp, "ListOrders");
          this.data = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  OrderDetail(i) {
    this.router.navigateByUrl('/detailOrder', i);
  }
  
}



  