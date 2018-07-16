import { Input, Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import { ConsoleDataService} from '../../../console/service/consoleData.service';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import {ContactForm } from '../../ContactForm';
@Component({
    selector: 'console-navbar',
    templateUrl: './console.navbar.component.html',
    styleUrls: ['./navbar.component.css']
  
})
export class ConsoleNavbarComponent implements OnInit  {
  ContactModel = new ContactForm();
  dataTable: void;
  data: Object;
  @Input() clients: string[];
  @Input() columns: string[];
  @Output() emitEvent:EventEmitter<object> =   new EventEmitter();
  estado:boolean = false;
  URLactual: any;
  public userMail;
  public userName;
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
    this.ConsoleDataService.Admin = true;
    this.function1(); 
     
  }
  changePass(body:ContactForm, f: NgForm){
    body.id = this.ConsoleDataService.user["id"];
    body.email = this.ConsoleDataService.user["email"];
    this.ConsoleService.changePassword(body).subscribe(resp => {
              console.log(resp, "changePass");
            },
              error => {
                console.log(error, "changePass error");
              })
  }
  onSubmit(f: NgForm){
    this.changePass(this.ContactModel, f);
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
      }
  }

   getUSerbyId() {
    var sapCode = document.getElementById('SAPCodeInput');
    sapCode.style.display = "block";
    var btn = document.getElementById('btnSuccess');
    btn.style.display = "block";
    this.ConsoleDataService.clientList();
   }
   searchClientbyCode(sapcode){
    this.ConsoleDataService.callClientService(sapcode);
    this.ConsoleDataService.closeModal("myModal");
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
    this.ConsoleDataService.client = this.ConsoleDataService.getClientActive(rowData);
    this.toggle(rowData);
  }
  isRowSelected(rowData: any){
    return (rowData.isSelected) ? "rowSelected" : "rowUnselected";
  } 
} 