import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'order-listorder-component',
  templateUrl: './orders.listOrder.component.html',
  styleUrls: ['./orders.listOrder.component.css']
})
export class ListOrderComponent {
  orderToEdit: any;
  public active =false;
  @Output() btnActive: EventEmitter<any> = new EventEmitter()
  @Input() activeBtnOrder = false;
  constructor(private router: Router){}
  activeBtn(btnActive){
    this.active = btnActive;
  }
  toggle(rowData) {

    this.activeBtnOrder = !this.activeBtn;
      this.btnActive.emit(this.activeBtn);
    }
  editOrder(orderToEdit){
    this.orderToEdit = orderToEdit;
    console.log(orderToEdit);
    // var url = '/detailOrder';
    // this.router.navigate([url], { queryParams: { orderToedit:  orderToedit} });
  }
  navigateToOrderDetail(){
    var url ='/detailOrder';
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "cantidadPedido": this.orderToEdit.cantidadPedido,
          "fechaDocumento": this.orderToEdit.fechaDocumento,
          "numDocumentoComercial": this.orderToEdit.numDocumentoComercial,
          "numMaterial": this.orderToEdit.numMaterial,
          "numPedidoCliente": this.orderToEdit.numPedidoCliente,
          "numPosicionDocumentoComercial": this.orderToEdit.numPosicionDocumentoComercial,
          "statusDocumento": this.orderToEdit.statusDocumento,
          "unidadMedidaVenta": this.orderToEdit.unidadMedidaVenta
  }
  };
    this.router.navigate([url], navigationExtras);
  
  }
  ToDeliveryNoteList(){
    var url ='/deliveryNotes';
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "cantidadPedido": this.orderToEdit.cantidadPedido,
          "fechaDocumento": this.orderToEdit.fechaDocumento,
          "numDocumentoComercial": this.orderToEdit.numDocumentoComercial,
          "numMaterial": this.orderToEdit.numMaterial,
          "numPedidoCliente": this.orderToEdit.numPedidoCliente,
          "numPosicionDocumentoComercial": this.orderToEdit.numPosicionDocumentoComercial,
          "statusDocumento": this.orderToEdit.statusDocumento,
          "unidadMedidaVenta": this.orderToEdit.unidadMedidaVenta
      }
  };
    this.router.navigate([url], navigationExtras);
}
}
