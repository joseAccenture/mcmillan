import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

// import { client } from '../../client';

@Component({
  selector: 'common-detailOrder-table',
  templateUrl: './detailOrder-table.component.html',
  styleUrls: ['./detailOrder-table.component.css'],
  providers: [ConsoleService]
})

export class DetailOrderTableComponent implements OnInit {
  clients: void;
  // @Input() characters: client[];
  @Input() columns: string[];
  @Input() customColumns = ["EAN","Material / Licencia","Descripción","Unidades"];
  
  row: any = []
  data: any = []
  userdata: any = []
  constructor(private ConsoleService: ConsoleService, private router: Router) { }
 
  ngOnInit() {
    this.clients = this.getOrders();
    this.columns = this.ConsoleService.getOrderColumns(); 
    
  }

  getOrders() {
    try {
      this.ConsoleService.getCLients()
        .subscribe(resp => {
          console.log(resp, "clients");
          this.data = resp["lineasPedido"];
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  OrderDetail(i) {
    // this.ConsoleService.submitLine()
    this.router.navigateByUrl('/detailOrder', i);
  }
  
}



  