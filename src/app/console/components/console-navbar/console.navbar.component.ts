import { Component, OnInit } from '@angular/core'; 
import { ConsoleService } from '../../service/console.service'; 
import { user } from '../../../user'; 
import { client } from '../../../client';
import { TableComponent } from '../../../common/table/table.component';
import {TableRowComponent} from '../../../common/table-row/table-row.component';
@Component({
    selector: 'console-navbar',
    templateUrl: './console.navbar.component.html',
    styleUrls: ['./navbar.component.css']
  
})
export class ConsoleNavbarComponent  {
    // values= ""
    clients: client[]; 
    constructor(private ConsoleService: ConsoleService) { } 
    getClients(): void { 
        this.clients = this.ConsoleService.getClients(); 
        console.log(this.clients); 
      } 
    //   onKey(event: any) { // without type info
    //     console.log( this.values = event.nombre1 + ' | ' + event.nombre2 + ' | ' + event.email);
    //    }
    //    ChangeClient($event){
    //      this.onKey($event);
    //      }
      ngOnInit() { 
        var clients = this.getClients(); 
     
    }
}