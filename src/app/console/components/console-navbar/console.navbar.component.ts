import { Input, Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import { Router } from '@angular/router';

@Component({
    selector: 'console-navbar',
    templateUrl: './console.navbar.component.html',
    styleUrls: ['./navbar.component.css']
  
})
export class ConsoleNavbarComponent implements OnInit  {
   data: Object;
  @Input() clients: string[];
  @Input() columns: string[];
  @Output() emitEvent:EventEmitter<object> =   new EventEmitter();
  estado:boolean = false;
  public userName;
  public userMail;
  public actualClient;  
  public actualUserName;
  public detallesNombres;  
  // public data:{
  //   nombre: string,
  //   email: string
  // }[];
  public user: {
    "codigoSap": string,
    "nombre": string
  }
  public id = 40;
  constructor(private ConsoleService: ConsoleService, private route : Router ) { }
  ngOnInit(){
    var user = this.getUSer();
    this.function1(); 
  }
  public function1(): boolean{
    let fResponse = !this.estado;
    this.estado = fResponse;
    //this.emitEvent.emit(fResponse);
    return fResponse;
  }
  updateActualUser(user: object){

     
      (Array.isArray(user)) ? this.actualClient = user[0]["nombre1"] : this.actualClient = user["nombre1"];
      
      this.route.navigate(["/clientdata"], {queryParams: {id : user["numCliente"]}})
      this.emitEvent.emit(user);
      this.detallesNombres = user["numCliente"]["email"];
      this.data = user;
    
  }
  getUSer() {
    try {
      this.ConsoleService.getUsers()
        .subscribe(resp => {
          this.data = resp;
          this.userName = resp[0].nombre;
          this.userMail = resp[0].email;
          console.log(this.userName, "User_selected");
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  
}



  