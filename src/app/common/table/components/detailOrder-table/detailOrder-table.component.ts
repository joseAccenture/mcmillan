import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';

// import { client } from '../../client';

@Component({
  selector: 'common-detailOrder-table',
  templateUrl: './detailOrder-table.component.html',
  styleUrls: ['./detailOrder-table.component.css'],
  providers: [ConsoleService]
})

export class DetailOrderTableComponent implements OnInit {
  orderToedit: object;
  clients: void;
  public pending= false;
  // @Input() characters: client[];
  @Input() columns: string[];
  @Input() customColumns = ["EAN","Material / Licencia","Descripción","Unidades"];
  
  row: any = []
  data: any = []
  userdata: any = []
  constructor(private ConsoleService: ConsoleService, private ActivatedRoute: ActivatedRoute) { }
 
  ngOnInit() {
    // this.clients = this.getOrders();
    // this.columns = this.ConsoleService.getOrderColumns(); 
    this.ActivatedRoute.queryParams.subscribe(params => {
      this.data = [{
        numMaterial: params.numMaterial,
        cantidadPedido: params.cantidadPedido,
        fechaDocumento: params.fechaDocumento,
        numDocumentoComercial: params.numDocumentoComercial
      }]

  });
    
  }

  // getOrders() {
  //   try {
  //     this.ConsoleService.getCLients()
  //       .subscribe(resp => {
  //         console.log(resp, "clients");
  //         this.data = resp["lineasPedido"];
  //       },
  //         error => {
  //           console.log(error, "error");
  //         })
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // OrderDetail(i) {
  //   // this.ConsoleService.submitLine()
  //   this.ActivatedRoute.navigateByUrl('/detailOrder', i);
  // }
  
}



  