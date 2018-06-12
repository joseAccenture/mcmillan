import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../service/users.service';
@Component({
  selector: 'users-editUser-component',
  templateUrl: './users.editUser.component.html',
  styleUrls: ['./users.editUser.component.css']
})
export class EditUserComponent {
  public id: any;
  datas: any;
  data: any;
  public userInEdit;
  optionSelected: any;
  options = ["Representante", "Cliente", "Administrador", "Atención Cliente", "Jefe de Marketing", "Jefe de Zona"];
  constructor(private UsersService: UsersService, private activatedRoute: ActivatedRoute) { }

  selectUserInEdit(userInEdit) {
    console.log(userInEdit);
  }
  onOptionSelected(event) {
    console.log(event); //option value will be sent as event
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      //   console.log(this.codigoSap);
      // this.onOptionSelected(event);  
    });
    this.getUSertoEdit();
  }
 
  getUSertoEdit() {
    try {
      this.UsersService.getUSertoEdit()
        .subscribe(resp => {
          console.log(resp, "userToedit", this.id);
          this.datas = resp
          this.data = this.datas.find(user=> user.id.toString() === this.id);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }

}



