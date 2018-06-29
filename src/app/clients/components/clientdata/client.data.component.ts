import { Component, OnInit, Input } from '@angular/core';
import { ConsoleDataService } from '../../../console/service/consoleData.service';

@Component({
  selector: 'client-data-component',
  templateUrl: './client.data.component.html',
  styleUrls: ['./client.data.component.css']
  
})
export class ClientDataComponent implements OnInit{
  client: any;
  getQueryParams(): any {
    throw new Error("Method not implemented.");
  }
  isInitialized: boolean;
  subscriptions: any;
  clientdata: void;
  title = 'app';
  clients: void;
  
 
  @Input() dataShared:boolean = false;
  // @Input() steps: string[];
  @Input() columns: string[];
  isUser: true;
  data: any = []
  // data2: any = []
  
  constructor(private ConsoleDataService: ConsoleDataService) {     
  }

   

  ngOnInit() {
  //   var isUser = true;
  //  this.route.queryParams.subscribe((params) => {
  //    console.log(params);
  //    this.clientdata = this.getClients(parseInt(params.id));
  //  });
  //  this.client = this.ConsoleDataService.client["detalleCliente"];
  }

  // getClients(id : number) {
  //   try {
  //     this.ConsoleService.getCLients(id)
  //       .subscribe(resp => {
  //         console.log(resp, "clientData");
  //         // this.data2 = resp["sociosCliente"];
  //         this.clientdata;
          
  //         console.log(this.clientdata)
  //         this.data = resp["detalleCliente"];
  //       },
  //         error => {
  //           console.log(error, "error");
  //         })
  //       } catch (e) {
  //               console.log(e);
  //             }
  // }
}