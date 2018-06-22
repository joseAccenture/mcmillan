import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ConsoleService} from '../../../console/service/console.service'
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
  constructor(private router: Router,private ConsoleService: ConsoleService ){}
  getPendingsOrders(){
    try {
      this.ConsoleService.getOrders(40)
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


}
