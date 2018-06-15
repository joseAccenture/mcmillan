import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';

// import { client } from '../../client';

@Component({
  selector: 'common-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})

export class ClientTableComponent implements OnInit {
  clients: void;
  @Input() columns: string[];
  customColumns = ["Código SAP", "Nombre"];
  @Output() actualClient: EventEmitter<string> =   new EventEmitter();


  data: any = []
  userdata: any = []
  constructor(private ConsoleService: ConsoleService) { }
 
  ngOnInit() {
    this.clients = this.getClient();
    this.columns = this.ConsoleService.getColumns(); 
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
      this.ConsoleService.getCLients()
        .subscribe(resp => {
          console.log(resp, "client_table");
          this.data = resp["detalleCliente"];
          this.actualClient.emit(this.data);

        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  ChangeClient (rowData){
    this.actualClient.emit(rowData);
    // this.actualClient.emit(rowData.codigoSap +" " + rowData.nombre);

  }
  isRowSelected(rowData: any){
    return (rowData.isSelected) ? "rowSelected" : "rowUnselected";
  }
}



  