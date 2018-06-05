import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';

@Component({
  selector: 'client-data-component',
  templateUrl: './client.data.component.html',
  styleUrls: ['./client.data.component.css']
  
})
export class ClientDataComponent {
  clientdata: void;
  title = 'app';
  clients: void;
  // @Input() steps: string[];
  @Input() columns: string[];
  isUser: true;
  data: any = []
  
  constructor(private ConsoleService: ConsoleService) { }
 
  ngOnInit() {
    var isUser = true;
    this.clientdata = this.getClientsData();
  }

  getClientsData() {
    try {
      this.ConsoleService.getClientsData()
        .subscribe(resp => {
          console.log(resp, "clientData");
          this.data = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
}
