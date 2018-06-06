import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'users-listuser-component',
  templateUrl: './users.listUser.component.html',
  styleUrls: ['./users.listUser.component.css']
  
})
export class ListUserComponent implements OnInit {
  public userToEdit;  
 
  @Output() userInEdit: EventEmitter<string> = new EventEmitter()

  constructor(private router: Router){}
  ngOnInit(){
 
  }
  
  selectUserToEdit(codigoSap){
    this.userToEdit = codigoSap;
  }
  selectUserInEdit( dato) {
   this.userInEdit.emit(dato);

 }
  goTouserEdit(userSelected){
    var url = '/editUser';
    // this.userInEdit.emit(userSelected);
    // this.router.navigateByUrl(url);
    this.router.navigate([url], { queryParams: { codigoSap: userSelected.codigoSap } });

  }
  deleteUser(userSelected){
    console.log(userSelected);
  }
}
