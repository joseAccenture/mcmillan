import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';
import { Router } from '@angular/router';

// import { client } from '../../client';

@Component({
  selector: 'common-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.sass'],
  providers: [ConsoleService]
})

export class OrderTableComponent implements OnInit {
  clients: void;
  // @Input() characters: client[];
  @Input() columns: string[];
  
  row: any = []
  data: any = []
  userdata: any = []
  constructor(private ConsoleService: ConsoleService, private router: Router) { }
 
  ngOnInit() {
    this.clients = this.getClient();
    // this.columns = this.ConsoleService.getColumns(); 
  }

  getClient() {
    try {
      this.ConsoleService.getCLients(40)
        .subscribe(resp => {
          console.log(resp, "clients");
          this.data = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  OrderDetail(i) {
    this.router.navigateByUrl('/detailOrder', i);
  }
  
}



  