import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'client-data-component',
  templateUrl: './client.data.component.html',
  styleUrls: ['./client.data.component.css']
  
})
export class ClientDataComponent implements OnInit{
  getQueryParams(): any {
    throw new Error("Method not implemented.");
  }
  isInitialized: boolean;
  subscriptions: any;
  clientdata: void;
  title = 'app';
  clients: void;
  id=40;
 
  @Input() dataShared:boolean = false;
  // @Input() steps: string[];
  @Input() columns: string[];
  isUser: true;
  data: any = []
  data2: any = []
  
  constructor(private ConsoleService: ConsoleService, private route: ActivatedRoute , private router: Router) {     
  }

   

  ngOnInit() {
    var isUser = true;
   this.route.queryParams.subscribe((params) => {
     console.log(params);
     this.clientdata = this.getClients(parseInt(params.id));
   });

    
  }

  getClients(id : number) {
      this.ConsoleService.getCLients(id)
        .subscribe(resp => {
          console.log(resp, "clientData");
          this.data2 = resp["sociosCliente"];
          this.clientdata;
          
          console.log(this.clientdata)
          this.data = resp["detalleCliente"];
        },
          error => {
            console.log(error, "error");
          })
  }
}
