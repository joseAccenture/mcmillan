import { Component, Input, OnInit } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';

@Component({
    selector: 'console-navbar',
    templateUrl: './console.navbar.component.html',
    styleUrls: ['./navbar.component.css']
  
})
export class ConsoleNavbarComponent implements OnInit  {
  @Input() clients: string[];
  @Input() columns: string[];
  public userName;
  public userMail;
  public actualClient;  
  public actualUserName;  

  constructor(private ConsoleService: ConsoleService ) { }
  ngOnInit(){
    var user = this.getUSer(); 
  }
  updateActualUser(codigoSap: string){
    this.actualClient = codigoSap;
  }
  getUSer() {
    try {
      this.ConsoleService.getUsers()
        .subscribe(resp => {
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



  