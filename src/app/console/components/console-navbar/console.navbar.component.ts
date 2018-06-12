import { Component, Input, OnInit } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';

@Component({
    selector: 'console-navbar',
    templateUrl: './console.navbar.component.html',
    styleUrls: ['./navbar.component.css']
  
})
export class ConsoleNavbarComponent implements OnInit  {
   data: Object;
  @Input() clients: string[];
  @Input() columns: string[];
  public userName;
  public userMail;
  public actualClient;  
  public actualUserName;  
  // public data:{
  //   nombre: string,
  //   email: string
  // }[];
  public user: {
    "codigoSap": string,
    "nombre": string
  }

  constructor(private ConsoleService: ConsoleService ) { }
  ngOnInit(){
    var user = this.getUSer(); 
  }
  updateActualUser(user: object){
    if (typeof user === "string"){
      this.actualClient = user;   
    }else{
      this.actualClient = user["codigoSap"] + " "+ user["nombre"];
    }
    
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



  