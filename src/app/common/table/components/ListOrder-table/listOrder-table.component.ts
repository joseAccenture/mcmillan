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
public pending = false;
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
  activeBtn = false;
  constructor(private ConsoleService: ConsoleService, private router: Router) { }

  ngOnInit() {
    this.orders = this.getOrdersList();
    // this.columns = this.ConsoleService.getOrderListColumns();
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
  getDraftList(){
    try {
      this.ConsoleService.getOrders()
        .subscribe(resp => {
          console.log(resp, "clientData");
          this.pending = true;
          this.data = resp;
          for (var i = 0; i < this.data.length; i++){
            this.data[i].estado = "Borrador";
          }
         
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
    
  }
  getOrdersList() {
    if (this.tableData === "pendingOrder") { 
         this.getDraftList(); 
      }else{
        try {
          this.ConsoleService.getOrdersList()
          .subscribe(resp => {
            console.log(resp, "ListOrders"); 
            this.data = resp["pedidos"];
            // if (this.tableData === "pendingOrder") { 
            //   this.getDraftList(this.data); 
            if (this.tableData === "newOrder") { 
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
  
  }
     
  toggle() {
    this.activeBtn = !this.activeBtn;
    // if (this.activeBtn) {
    //   this.btnActive.emit(!this.activeBtn);
    // } else {
      this.btnActive.emit(this.activeBtn);
    
  }
ChangeClient (rowData){
  rowData.isSelected = !rowData.isSelected;
  // this.selectedRow = this.data.indexOf(rowData);
  this.toggle();
  this.orderToEdit.emit(rowData);
  // console.log(rowData);
}
isRowSelected(rowData: any) {
  return (rowData.isSelected) ? "rowSelected" : "rowUnselected";
}
}  