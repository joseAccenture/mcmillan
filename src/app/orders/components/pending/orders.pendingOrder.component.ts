import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ConsoleService} from '../../../console/service/console.service'
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
  constructor(private router: Router,private ConsoleService: ConsoleService ){}
  toggle(rowData) {

    this.activeBtnOrder = !this.activeBtnOrder;
      this.btnActive.emit(this.activeBtnOrder);
    }
  getPendingsOrders(){
    try {
      this.ConsoleService.getOrders()
        .subscribe(resp => {
          console.log(resp, "ListOrders");
          this.data = resp[0].lineasPedido;
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
      // queryParams: {
      //     "cantidadPedido": this.orderToEdit.cantidadPedido,
      //     "fechaDocumento": this.orderToEdit.fechaDocumento,
      //     "numDocumentoComercial": this.orderToEdit.numDocumentoComercial,
      //     "numMaterial": this.orderToEdit.numMaterial,
      //     "numPedidoCliente": this.orderToEdit.numPedidoCliente,
      //     "numPosicionDocumentoComercial": this.orderToEdit.numPosicionDocumentoComercial,
      //     "statusDocumento": this.orderToEdit.statusDocumento,
      //     "unidadMedidaVenta": this.orderToEdit.unidadMedidaVenta
      // }
      queryParams: {
          // "codigoSap": this.data.id,
        "idMaterial": this.data.idMaterial
    }
  };
  
    this.router.navigate([url], navigationExtras);

  }

  selectOrderToEdit(codigoSap){
    this.orderToEdit = codigoSap;
  }

  goToorderEdit(orderSelected){


  }
  deleteOrderFromList(idObj) {
    // var url ='/MasiveCreate';
    var url = '/pendingOrder';
    try {
      this.ConsoleService.delOrder(idObj)
        .subscribe(resp => {
          console.log(resp, "orders");
          this.data = resp,
          this.router.navigate([url]);
          // this.userToEdit.emit(this.data[0].codigoSap);
          // this.btnActive.emit(this.activeBtn);
          
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  deleteOrder(orderSelected){   
    
   this.deleteOrderFromList(orderSelected.id);
   
  }



}

