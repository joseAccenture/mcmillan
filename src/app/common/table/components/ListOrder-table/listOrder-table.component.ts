import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';
import { Router } from '@angular/router';

@Component({
  selector: 'common-listorder-table',
  templateUrl: './listOrder-table.component.html',
  styleUrls: ['./listOrder-table.component.sass'],
  providers: [ConsoleService]
})

export class ListOrderTableComponent implements OnInit {
  public orders;
  @Input() columns: string[];
  public URLactual: string;
  public newOrder: boolean;
  @Input() tableData: string;
  row: any = []
  data: any = []
  userdata: any = []
  constructor(private ConsoleService: ConsoleService, private router: Router) { }
 
  ngOnInit() {
    this.orders = this.getOrdersList();
    this.columns = this.ConsoleService.getOrderListColumns(); 
    this.URLactual = window.location.pathname.slice(1).toString();
  }
  getCleanRows(orders){
    this.data = [{descripcion:"", estado:"", fecha:"", referencia:""}]
    var newOrder = true;
    console.log("newOrder"+ orders);
  }
  getStatus(orders){
    this.data = orders.filter(orders => orders.estado === "borrador");
  }
  getOrdersList() {
    try {
      this.ConsoleService.getOrdersList()
        .subscribe(resp => {
          console.log(resp, "ListOrders");
          this.data = resp
          if (this.tableData === "pendingOrder"){
            this.getStatus(this.data);
          }else if (this.tableData === "newOrder"){
            this.getCleanRows(this.data);
          }
          
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



  