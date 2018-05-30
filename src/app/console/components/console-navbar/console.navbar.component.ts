import { Component, OnInit } from '@angular/core'; 
import { ConsoleService } from '../../service/console.service'; 
import { client } from '../../../client';
import { CommonTableClientService } from '../../../common/table/service/common-table-client.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'console-navbar',
    templateUrl: './console.navbar.component.html',
    styleUrls: ['./navbar.component.css']
  
})
export class ConsoleNavbarComponent  {
    client: Observable<Object>;
    // activeUSer: string;
    values= ""
    clients: client[]; 
    constructor(private CommonTableClientService: CommonTableClientService) { } 
    getClients(): void { 
        this.client = this.CommonTableClientService.getCLients(); 
        // this.activeUSer= client[0].name;
        console.log(this.client); 
      } 
      onKey(event: any) { // without type info
        console.log( this.values = event.nombre1 + ' | ' + event.nombre2 + ' | ' + event.email);
       }
       ChangeClient($event){
         this.onKey($event);
         }
      ngOnInit() { 
        var clients = this.getClients(); 
    }
    myFunction() {
        // Declare variables 
        var input, filter, table, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          } 
        }
      }
}