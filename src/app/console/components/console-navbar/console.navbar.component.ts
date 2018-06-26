import { Input, Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import { ConsoleDataService} from '../../../console/service/consoleData.service';

import { Router } from '@angular/router';

@Component({
    selector: 'console-navbar',
    templateUrl: './console.navbar.component.html',
    styleUrls: ['./navbar.component.css']
  
})
export class ConsoleNavbarComponent implements OnInit  {
  dataTable: void;
  data: Object;
  @Input() clients: string[];
  @Input() columns: string[];
  @Output() emitEvent:EventEmitter<object> =   new EventEmitter();
  estado:boolean = false;
  URLactual: any;
  public userMail;
  public userName;

  // public actualClient;  
  // public detallesNombres;  
  // data:{
  //   nombre: string,
  //   email: string
  // }[];
  // public user: {
  //   "codigoSap": string,
  //   "nombre": string
  // }
  selectedRow: any;
  @Output() btnActive: EventEmitter<any> = new EventEmitter()
  @Input() activeBtn = false;

  constructor(private ConsoleService: ConsoleService,private ConsoleDataService: ConsoleDataService, private route : Router ) { }
  @Output() actualClient: EventEmitter<string> =   new EventEmitter();
  @Output() userToEdit: EventEmitter<any> = new EventEmitter() 
  ngOnInit(){
    this.data = this.ConsoleDataService.user;
    this.userMail = this.data["email"];
    this.userName = this.data["nombre"];
    this.function1(); 
     
  }
  public function1(): boolean{
    let fResponse = !this.estado;
    this.estado = fResponse;
    //this.emitEvent.emit(fResponse);
    return fResponse;
   }
   updateActualUser(user: object){

    this.URLactual = window.location.pathname.slice(1).toString();
      (Array.isArray(user)) ? this.actualClient = user[0]["nombre1"] : this.actualClient = user["nombre1"];
      if(this.URLactual != "macmillanEducation/"){
        this.route.navigate(["/clientdata"], {queryParams: {id : user["numCliente"]}})
        this.emitEvent.emit(user);
        // this.detallesNombres = user["numCliente"]["email"];
        
        
      }
     
    
  }

   getUSerbyId() {
    this.ConsoleDataService.clientList();
   }

   toggle(rowData) {

    this.activeBtn = !this.activeBtn;
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
    // this.actualClient.emit(rowData);
    // this.userToEdit.emit(rowData);
    this.ConsoleDataService.firstclientToRepresent = rowData.numCliente;
    this.ConsoleDataService.client = rowData;
    this.toggle(rowData);

  }
  isRowSelected(rowData: any){
    return (rowData.isSelected) ? "rowSelected" : "rowUnselected";
  } 
} 