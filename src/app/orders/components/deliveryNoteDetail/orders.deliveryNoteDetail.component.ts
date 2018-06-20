import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { ConsoleService } from '../../../console/service/console.service';
@Component({
  selector: 'order-delivery-detail-component',
  templateUrl: './orders.deliveryNoteDetail.component.html',
  styleUrls: ['./orders.deliveryNoteDetail.component.css']
})
export class DeliveryNoteOrderDetailComponent implements OnInit {
  dataItems: any;
  clientData: Object;
  public dataToReturn: object = {
    cantidadPedido: null,
    fechaDocumento: null,
    numDocumentoComercial: null,
    numMaterial: null,
    numPedidoCliente: null,
    numPosicionDocumentoComercial: null,
    statusDocumento: null,
    unidadMedidaVenta: null
  };
  deliveryNote: string;
  data: object;
  numAlbaran: string;
    // orderToEdit: any;
  // public active =false;
  public active: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,private router: Router, private ConsoleService:ConsoleService){}
  ngOnInit() {  
     
    this.activatedRoute.queryParams.subscribe(params => {
      this.numAlbaran = params.numAlbaran;
      this.dataToReturn = params;
    });
     this.getDeliveryNoteDetail(this.numAlbaran);
  }
  getClientDetail(numAlbaran){
    try {
      this.ConsoleService.getCLientDetail(numAlbaran)
        .subscribe(resp => {
          console.log(resp, "detalleCliente_LAst");
          this.clientData = resp["detalleCliente"];
         
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  getDeliveryNoteDetail(numAlbaran){
    try {
      this.ConsoleService.getDeliveryNoteDetail(this.numAlbaran)
        .subscribe(resp => {
          console.log(resp, "detalleAlbaran");
          this.data = resp["albaranHeader"];
          this.dataItems = resp["albaranItems"];
          
          this.getClientDetail(this.data["solicitante"]);
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
      this.deliveryNote = rowData["numAlbaran"];
      console.log(this.active);
  }
  ToDeliveryNoteDetail(){
    var url ='/deliveryNoteDetail';
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "numDocumentoComercial": this.deliveryNote
      }
  };
    this.router.navigate([url], navigationExtras);
  }
  ReturnToDeliveryList(){
    var url ='/deliveryNotes';
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "cantidadPedido": this.dataToReturn["cantidadPedido"],
          "fechaDocumento": this.dataToReturn["fechaDocumento"],
          "numDocumentoComercial": this.dataToReturn["numDocumentoComercial"],
          "numMaterial": this.dataToReturn["numMaterial"],
          "numPedidoCliente": this.dataToReturn["numPedidoCliente"],
          "numPosicionDocumentoComercial": this.dataToReturn["numPosicionDocumentoComercial"],
          "statusDocumento": this.dataToReturn["statusDocumento"],
          "unidadMedidaVenta": this.dataToReturn["unidadMedidaVenta"]
      }
  };
    this.router.navigate([url], navigationExtras);
  }
  DownloadDeliveryNote(){
    console.log("donwload");
  }
}
