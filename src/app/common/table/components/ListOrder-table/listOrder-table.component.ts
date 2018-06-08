import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';
import { Router } from '@angular/router';

@Component({
  selector: 'common-listorder-table',
  templateUrl: './listOrder-table.component.html',
  styleUrls: ['./listOrder-table.component.css'],
  providers: [ConsoleService]
})

export class ListOrderTableComponent implements OnInit {

  selectedRow: any;
  public orders;
  @Input() columns: string[];
  @Input() customColumns = ["Referencia", "Estado", "Fecha", "Descripción"];
  public URLactual: string;
  @Input() tableData: string;
  row: any = []
  data: any = []
  userdata: any = []
  @Output() btnActive: EventEmitter<any> = new EventEmitter()
  @Output() orderToEdit: EventEmitter<any> = new EventEmitter() 
  @Input() activeBtn = false;
  constructor(private ConsoleService: ConsoleService, private router: Router) { }

  ngOnInit() {
    this.orders = this.getOrdersList();
    this.columns = this.ConsoleService.getOrderListColumns();
    this.URLactual = window.location.pathname.slice(1).toString();
  }

  getCleanRows(orders) {
    this.customColumns = ["EAN", "Material/ Licencia", "Descripción", "Unidades"];
    this.data = []
    // var newOrder = true;
    // console.log("newOrder" + orders);
  }
  getStatus(orders) {
    this.data = orders.filter(orders => orders.estado === "borrador");
  }
  getOrdersList() {
    try {
      this.ConsoleService.getOrdersList()
        .subscribe(resp => {
          console.log(resp, "ListOrders");
          this.data = resp
          if (this.tableData === "pendingOrder") {
            this.getStatus(this.data);
          } else if (this.tableData === "newOrder") {
            this.getCleanRows(this.data);
          }
          this.btnActive.emit(this.activeBtn);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  toggle() {
    this.activeBtn = !this.activeBtn;
    if (this.activeBtn) {
      this.btnActive.emit(this.activeBtn);
    } else {
      this.btnActive.emit(!this.activeBtn);
    }
  }
  selectRow(index, dato) {
    this.selectedRow = index;
    this.toggle();
    this.orderToEdit.emit(dato);
    // try {
    //   this.ConsoleService.submitLine(dato)
    //     .subscribe(resp => {
    //       console.log(resp, "ListOrders");
    //       this.data = resp
    //       // if (this.tableData === "pendingOrder") {
    //       //   this.getStatus(this.data);
    //       // } else if (this.tableData === "newOrder") {
    //       //   this.getCleanRows(this.data);
    //       // }
    //       this.btnActive.emit(this.activeBtn);
    //     },
    //       error => {
    //         console.log(error, "error");
    //       })
    // } catch (e) {
    //   console.log(e);
    // }

 }
}  