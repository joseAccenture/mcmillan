import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ConsoleService} from '../../../console/service/console.service'
import { ConsoleDataService} from '../../../console/service/consoleData.service'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'order-pendingorder-component',
  templateUrl: './orders.pendingOrder.component.html',
  styleUrls: ['./orders.pendingOrder.component.css']
})

export class PendingOrderComponent implements OnInit {
  public data: any;
  public orderToEdit; 
  public active =false; 
  @Output() btnActive: EventEmitter<any> = new EventEmitter() 
  @Input() activeBtnOrder = false; 
  ngOnInit(): void {
   this.getPendingsOrders();
  }
  constructor(private router: Router,private ConsoleDataService: ConsoleDataService, private ConsoleService: ConsoleService, private datePipe: DatePipe ){}
  getPendingsOrders(){
    try {
      this.ConsoleService.getOrdersDraft()
        .subscribe(resp => {
          console.log(resp, "ListOrders");
          // this.data = resp[0].lineasPedido;
          this.ConsoleDataService.orderslist = resp
          // this.btnActive.emit(this.activeBtn);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  selectOrderToEdit(codigoSap){ 
    this.orderToEdit = codigoSap; 
  } 
  orderLines(){
  for (var i=0; i < this.ConsoleDataService.ordertoDelete.lineasPedido.length; i++){
    var lines = [
        this.ConsoleDataService.ordertoDelete.lineasPedido[i].id, this.ConsoleDataService.ordertoDelete.lineasPedido[i].idMaterial,
        this.ConsoleDataService.ordertoDelete.lineasPedido[i].unidades
    ]
    return lines
  }
  }
    navigateToDetail(){
    var url ='/newOrder';
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "ccc":this.ConsoleDataService.ordertoDelete.ccc,
        "cif": this.ConsoleDataService.ordertoDelete.cif,
        "codigoSap":this.ConsoleDataService.ordertoDelete.codigoSap,
        "condicionPago":this.ConsoleDataService.ordertoDelete.condicionPago,
        "direccion":this.ConsoleDataService.ordertoDelete.direccion,
        "direccionEntrega":this.ConsoleDataService.ordertoDelete.direccionEntrega,
        "email":this.ConsoleDataService.ordertoDelete.email,  
        "fecha":this.datePipe.transform(this.ConsoleDataService.ordertoDelete.fecha,"yyyy-MM-dd"),
        "id": this.ConsoleDataService.ordertoDelete.id,
        "idUser":this.ConsoleDataService.ordertoDelete.idUser,
        "isSelected":this.ConsoleDataService.ordertoDelete.isSelected,
        "idOrder": this.ConsoleDataService.ordertoDelete.idOrder,
        "lineasPedido":this.orderLines(),
        "personaContacto":this.ConsoleDataService.ordertoDelete.personaContacto,
        "telefono":this.ConsoleDataService.ordertoDelete.telefono,
        "tipoCliente":this.ConsoleDataService.ordertoDelete.tipoCliente,
        "tipoFactura":this.ConsoleDataService.ordertoDelete.tipoFactura,
        "viaPago":this.ConsoleDataService.ordertoDelete.viaPago,
        "fromUrl": "pending"
    }
  };
  
    this.router.navigate([url], navigationExtras);

  }
  toggle(rowData) { 
 
    this.activeBtnOrder = !this.activeBtnOrder; 
      this.btnActive.emit(this.activeBtnOrder); 
    } 
ChangeClient (rowData){
  rowData.isSelected = !rowData.isSelected;
  // this.selectedRow = this.data.indexOf(rowData);
  this.ConsoleDataService.ordertoDelete = rowData;
  // this.ConsoleDataService.client = this.ConsoleDataService.getClientActive(rowData.codigoSap);
  // this.toggle();
  // this.orderToEdit.emit(rowData);
  // console.log(rowData);
}
isRowSelected(rowData: any) {
  return (rowData.isSelected) ? "rowSelected" : "rowUnselected";
}
deleteOrderFromList(idObj) { 
  // var url ='/MasiveCreate'; 
  // var url = '/pendingOrder'; 
  try { 
    this.ConsoleService.delOrder(idObj) 
      .subscribe(resp => { 
        console.log(resp, "orders"); 
        this.data = resp
        this.getPendingsOrders();
      }, 
        error => { 
          console.log(error, "error"); 
        }) 
  } catch (e) { 
    console.log(e); 
  } 
} 
  deleteOrder(){    
  this.deleteOrderFromList(this.ConsoleDataService.ordertoDelete.id); 
  } 

}
