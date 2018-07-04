import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { ConsoleService } from '../../../console/service/console.service';
import { ConsoleDataService } from '../../../console/service/consoleData.service';
@Component({
  selector: 'users-listuser-component',
  templateUrl: './users.listUser.component.html',
  styleUrls: ['./users.listUser.component.css']
  
})
export class ListUserComponent implements OnInit {
  data: any;
  public userToEdit;  
  public active =false;

  @Output() userInEdit: EventEmitter<string> = new EventEmitter()

  constructor(private router: Router, private UsersService: UsersService, private ConsoleService:ConsoleService, private ConsoleDataService: ConsoleDataService ){}
  ngOnInit(){
 
  }
  activeBtn(btnActive){
    this.active = btnActive;
  }
  
  selectUserToEdit(codigoSap){
    this.userToEdit = codigoSap;
  }
  selectUserInEdit( dato) {
   this.userInEdit.emit(dato);

 }
  goTouserEdit(userSelected){
    var url = '/editUser';
    this.router.navigate([url], { queryParams: { id: userSelected.id } });

  }
  deleteUserFromList(idObj) {
    try {
      this.UsersService.delUser(idObj)
        .subscribe(resp => {
          console.log(resp, "clients");
          this.data = resp
         this.ConsoleService.getUsers()
         .subscribe(resp =>{
          this.ConsoleDataService.userlist = resp
         }

        )
          // this.userToEdit.emit(this.data[0].codigoSap);
          // this.btnActive.emit(this.activeBtn);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  deleteUser(userSelected){
    this.deleteUserFromList(userSelected.id); 
  }
}
