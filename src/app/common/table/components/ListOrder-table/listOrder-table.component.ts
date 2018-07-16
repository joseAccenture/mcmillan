import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';
import { ConsoleDataService } from '../../../../console/service/consoleData.service';
import { Router } from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'common-listorder-table',
  templateUrl: './listOrder-table.component.html',
  styleUrls: ['./listOrder-table.component.css'],
  providers: [ConsoleService]
})

export class ListOrderTableComponent implements OnInit {
  fecEnt = new FormControl('', Validators.required); 
  fecSal = new FormControl('', Validators.required); 

  public pending = false;
  selectedRow: any;
  public visibleTarget:boolean = false;
  public orders;
  @Input() columns: string[];
  public URLactual: string;
  @Input() tableData: string; 
  row: any = []
  data: any = []
  userdata: any = []
  @Output() btnActive: EventEmitter<any> = new EventEmitter()
  @Output() orderToEdit: EventEmitter<any> = new EventEmitter() 
  activeBtn = false;
  constructor(private ConsoleService: ConsoleService, private ConsoleDataService: ConsoleDataService, private router: Router, private datePipe: DatePipe) { }
  public myDatePickerOptions: IMyDpOptions  = {
    // other options...
    dateFormat: 'dd/mm/yyyy'
}
  ngOnInit() {
 
    // this.columns = this.ConsoleService.getOrderListColumns();
    this.URLactual = window.location.pathname.slice(1).toString();
    if (this.URLactual === "pendingOrder"){
      this.pending = true;
    }
  }

  getCleanRows(orders) {
    this.data = []
    // var newOrder = true;
    // console.log("newOrder" + orders);
  }
  getStatus(orders) {
    this.data = orders.filter(orders => orders.estado === "borrador");
  }
  getDraftList(){
    try {
      this.ConsoleService.getOrdersDraft(this.ConsoleDataService.user["id"])
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
      }
  }
     
  toggle(rowData) {
    if (rowData.isSelected){
      this.activeBtn = true;
    }else{
      this.activeBtn = false;
    }
      this.btnActive.emit(this.activeBtn);
    
  }
ChangeClient (rowData){
  rowData.isSelected = !rowData.isSelected;
  // this.selectedRow = this.data.indexOf(rowData);
  this.toggle(rowData);
  this.orderToEdit.emit(rowData);
  // console.log(rowData);
}
isRowSelected(rowData: any) {
  return (rowData.isSelected) ? "rowSelected" : "rowUnselected";
}
lookForOrders(fecEnt, fecSal){
  this.visibleTarget = false;
  var fechaEntr =  fecEnt.value.formatted.split("/").reverse().join("-");
  var fechaSal =  fecSal.value.formatted.split("/").reverse().join("-");
  this.ConsoleService.getOrdersList(fechaEntr, fechaSal, this.ConsoleDataService.codigoSap)
  .subscribe(resp => {
    console.log(resp, "lookFor");
    this.data = resp["pedidos"];
    for (var i=0;this.data.length; i++){
      this.data[i].fechaDocumento = this.datePipe.transform(this.data[i].fechaDocumento,"yyyy-dd-MM");

    }
  },
    error => {
      console.log(error, "error");
    })
}
}  