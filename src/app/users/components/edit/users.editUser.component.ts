import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {UsersService} from '../../service/users.service';
@Component({
  selector: 'users-editUser-component',
  templateUrl: './users.editUser.component.html',
  styleUrls: ['./users.editUser.component.css']
})
export class EditUserComponent {
  data: any;
  public userInEdit; 
  optionSelected: any;
  options = ["Representante","Cliente","Administrador","Atención Cliente","Jefe de Marketing","Jefe de Zona"];
  public codigoSap: string; 
  constructor(private UsersService: UsersService, private activatedRoute: ActivatedRoute){}

  selectUserInEdit(userInEdit) {
    console.log(userInEdit);
  }
  onOptionSelected(event){
    console.log(event); //option value will be sent as event
   }
  ngOnInit() {  
    this.activatedRoute.queryParams.subscribe(params => {
        this.codigoSap = params['codigoSap'];
        console.log(this.codigoSap);
      this.onOptionSelected(event);  
    });
    this.getUSertoEdit(this.codigoSap);
}

getUSertoEdit(codigoSap) {
  try {
    this.UsersService.getUSertoEdit(codigoSap)
      .subscribe(resp => {
        console.log(resp, "userToedit");
        this.data = resp
        this.optionSelected = this.data.tipoCliente;
      
      },
        error => {
          console.log(error, "error");
        })
  } catch (e) {
    console.log(e);
  }
}
 
}
