import { Component, Input } from '@angular/core';
import { UsersService} from '../../service/users.service';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'users-createuser-component',
  templateUrl: './users.createUser.component.html',
  styleUrls: ['./users.createUser.component.css']
})
export class CreateUserComponent {
  @Input() data: any;
  
 constructor(private UsersService: UsersService){}
/* method to call post-api from app.service */ 
 submitUser(data) { 
  try { 
    let user = { 
      codigoSap:null,
      nombre: this.data.nombre,
      email: this.data.email,
      tipoCliente: null,
      zona: this.data.zona,
    } 
    console.log(user,"author") 
    this.UsersService.submitUser(user) 
      .subscribe(resp => { 
        console.log(resp, "res"); 
        this.data = resp 
      }, 
        error => { 
          console.log(error, "error"); 
        }) 
  } catch (e) { 
    console.log(e); 
  } 
}   
}
