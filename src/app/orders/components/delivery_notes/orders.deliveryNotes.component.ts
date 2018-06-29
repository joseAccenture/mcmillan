import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { ConsoleService } from '../../../console/service/console.service';
@Component({
  selector: 'order-delivery-list-component',
  templateUrl: './orders.deliveryNotes.component.html',
  styleUrls: ['./orders.deliveryNotes.component.css']
})
export class DeliveryNotesOrderComponent implements OnInit {
  deliveryNote: any;
  deliveryNoteData: object;
  data: object;
  numDocumentoComercial: string;
  // orderToEdit: any;
  // public active =false;
  public active: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private ConsoleService:ConsoleService){}
  ngOnInit() {  

    this.activatedRoute.queryParams.subscribe(params => {
      this.numDocumentoComercial= params.numDocumentoComercial;
      this.deliveryNoteData = params;
    });
    this.getDeliveryNotes();
  }
  
  getDeliveryNotes(){
    try {
      this.ConsoleService.getDeliveryNotes(this.numDocumentoComercial)
        .subscribe(resp => {
          console.log(resp, "clientData");
          this.data = resp["albaranes"];
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
}
    
  }
  isRowSelected(rowData: any){
    return (rowData.isSelected) ? "rowSelected" : "rowUnselected";
  }
  ChangeClient(rowData){
    console.log(rowData);
      rowData.isSelected = !rowData.isSelected;
      this.active = !this.active;
      this.deliveryNote = rowData;
      console.log(this.active);
  }
  ToDeliveryNoteDetail(){
    var url ='/deliveryNoteDetail';
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "cantidadPedido": this.deliveryNoteData["cantidadPedido"],
          "fechaDocumento": this.deliveryNoteData["fechaDocumento"],
          "numDocumentoComercial": this.deliveryNoteData["numDocumentoComercial"],
          "numMaterial": this.deliveryNoteData["numMaterial"],
          "numPedidoCliente": this.deliveryNoteData["numPedidoCliente"],
          "numPosicionDocumentoComercial": this.deliveryNoteData["numPosicionDocumentoComercial"],
          "statusDocumento": this.deliveryNoteData["statusDocumento"],
          "unidadMedidaVenta": this.deliveryNoteData["unidadMedidaVenta"],
          "numAlbaran": this.deliveryNote.numAlbaran
      }
  };
    this.router.navigate([url], navigationExtras);
  }
}

