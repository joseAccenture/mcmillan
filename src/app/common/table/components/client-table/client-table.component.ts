import { Component, OnInit, Input } from '@angular/core';
import { CommonTableClientService } from '../../service/common-table-client.service';

// import { client } from '../../client';

@Component({
  selector: 'common-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.sass']
})

export class ClientTableComponent implements OnInit {
  clients: void;
  // @Input() characters: client[];
  @Input() columns: string[];

  data: any = []
  userdata: any = []
  constructor(private CommonTableClientService: CommonTableClientService) { }
 
  ngOnInit() {
    this.clients = this.getClient();
    this.columns = this.CommonTableClientService.getColumns(); 
  }
  filterTable($event, searchby) {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  }
  getClient() {
    try {
      this.CommonTableClientService.getCLients()
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
  getUser() {
    try {
      this.CommonTableClientService.getCLients()
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
  onKey(event: any) { // without type info
    console.log( event.nombre1 + ' | ' + event.nombre2 + ' | ' + event.email);
   }
   ChangeClient($event){
     this.onKey($event);
     }
 
}



  