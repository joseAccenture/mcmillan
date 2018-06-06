import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';

// import { client } from '../../client';

@Component({
  selector: 'common-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass'],
  providers: [ConsoleService]
})

export class USerTableComponent implements OnInit {
  selectedRow: any;
  clients: void;
  @Input() columns: string[];
  @Input() customColumns = ["Nombre","Email","Tipo de cliente"];

  @Output() userToEdit: EventEmitter<string> = new EventEmitter()
  data: any = []
  userdata: any = []
  constructor(private ConsoleService: ConsoleService) { }
 
  ngOnInit() {
    this.clients = this.getClient();
    this.columns = this.ConsoleService.getUsersColumns(); 
  }

  getClient() {
    try {
      this.ConsoleService.getUsers()
        .subscribe(resp => {
          console.log(resp, "clients");
          this.data = resp
          this.userToEdit.emit(this.data[0].codigoSap);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  selectUserToEdit(index, dato) {
     this.selectedRow = index;
    this.userToEdit.emit(dato);

  }
}



  