import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ConsoleService} from '../../../console/service/console.service'
import { ConsoleDataService} from '../../../console/service/consoleData.service'

@Component({
  selector: 'order-pendingorder-component',
  templateUrl: './orders.pendingOrder.component.html',
  styleUrls: ['./orders.pendingOrder.component.css']
})

export class PendingOrderComponent implements OnInit {
  public data: any;

  ngOnInit(): void {
   this.getPendingsOrders();
  }
  constructor(private router: Router,private ConsoleDataService: ConsoleDataService, private ConsoleService: ConsoleService ){}
  getPendingsOrders(){
    try {
      this.ConsoleService.getOrdersDraft()
        .subscribe(resp => {
          console.log(resp, "ListOrders");
          // this.data = resp[0].lineasPedido;
          this.data = resp
          // this.btnActive.emit(this.activeBtn);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
    navigateToDetail(){
    var url ='/detailOrder';
    let navigationExtras: NavigationExtras = {
      queryParams: {
          // "codigoSap": this.data.id,
        "idMaterial": this.data.codigoSap
    }
  };
  
    this.router.navigate([url], navigationExtras);

  }
  toggle() {
    // this.activeBtn = !this.activeBtn;
    // if (this.activeBtn) {
    //   this.btnActive.emit(!this.activeBtn);
    // } else {
      // this.btnActive.emit(this.activeBtn);
    
  }
ChangeClient (rowData){
  rowData.isSelected = !rowData.isSelected;
  // this.selectedRow = this.data.indexOf(rowData);
  this.ConsoleDataService.client = this.ConsoleDataService.getClientActive(rowData.codigoSap);
  this.toggle();
  // this.orderToEdit.emit(rowData);
  // console.log(rowData);
}
isRowSelected(rowData: any) {
  return (rowData.isSelected) ? "rowSelected" : "rowUnselected";
}


}
