import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';
import { ConsoleDataService } from '../../../../console/service/consoleData.service';

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
  @Output() btnActive: EventEmitter<any> = new EventEmitter()
  @Input() activeBtn = false;
  @Input() columns: string[];
  @Input() customColumns = ["Nombre","Email","Tipo de cliente"];

  // @Output() userToEdit: EventEmitter<string> = new EventEmitter()
  data: any = []
  userdata: any = []
  constructor(private ConsoleService: ConsoleService, private ConsoleDataService: ConsoleDataService) { }
  @Output() actualClient: EventEmitter<string> =   new EventEmitter();
  @Output() userToEdit: EventEmitter<any> = new EventEmitter() 


  ngOnInit() {
    this.clients = this.getUser();
    // this.columns = this.ConsoleService.getUsersColumns(); 
  }

  getUser() {
    try {
      this.ConsoleService.getUsers()
        .subscribe(resp => {
          console.log(resp, "clients");
          this.ConsoleDataService.userlist = resp
          // this.userToEdit.emit(this.data[0].codigoSap);
          this.btnActive.emit(this.activeBtn);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  toggle(rowData) {
    if (this.ConsoleDataService.lastId === rowData.id){
      if (this.activeBtn === false){
        this.activeBtn = false;
        this.ConsoleDataService.lastId = rowData.id
      }else{
        this.activeBtn = true;
        this.ConsoleDataService.lastId = rowData.id
      }
    }
   console.log(this.activeBtn + "activeBtn");
    this.btnActive.emit(this.activeBtn);
  }
  selectUserToEdit(index, dato) {
     this.selectedRow = index;
    //  this.toggle();
    this.userToEdit.emit(dato);

  }
  ChangeClient (rowData){
    $(".ui-widget-content").removeClass("rowSelected");
    rowData.isSelected = !rowData.isSelected;
    this.actualClient.emit(rowData);
    this.userToEdit.emit(rowData);
    this.toggle(rowData);

  }
  isRowSelected(rowData: any){
    return (rowData.isSelected) ? "rowSelected" : "rowUnselected";
  }
}



  