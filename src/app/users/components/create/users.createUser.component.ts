import { Component, Input } from '@angular/core';
import { UsersService} from '../../service/users.service';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';


@Component({
  selector: 'users-createuser-component',
  templateUrl: './users.createUser.component.html',
  styleUrls: ['./users.createUser.component.css']
})
export class CreateUserComponent {
  @Input() data: any;
  public formGroup;

  // public SendForm = new FormGroup({
  //   nombre: new FormControl(),
  //   email: new FormControl(),
  //   zona:new FormControl()
  // });

  // nombre = new FormControl(this.nombre);
  // email = new FormControl(this.email);  
  // zona = new FormControl(this.zona);

  name = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  email = new FormControl('', Validators.required);  
  zona = new FormControl('', Validators.required);
  // codigoSap = new FormControl(6);
  clientType = new FormControl('');
  representados = new FormControl({"codigoSap": 1, "nombre": "Jonh Ford"});
  
 constructor(private UsersService: UsersService){}
 


//  public onSubmit(): void {
//  this.formGroup.getRawValue()
//     .subscribe(
//       (val) => console.log(val),
//       (err) => console.error(err)
//     );
// }
// /* method to call post-api from app.service */ 
//  submitUser(data) { 
//   try { 
//     let user = { 
//       codigoSap:null,
//       nombre: this.data.nombre,
//       email: this.data.email,
//       tipoCliente: null,
//       zona: this.data.zona,
//     } 
//     console.log(user,"author") 
//     this.UsersService.submitUser(user) 
//       .subscribe(resp => { 
//         console.log(resp, "res"); 
//         this.data = resp 
//       }, 
//         error => { 
//           console.log(error, "error"); 
//         }) 
//   } catch (e) { 
//     console.log(e); 
//   } 
// }   

setNameValue() {
 
  // console.log('Name: ' + this.name.value);
  // console.log('Validation Status: ' + this.name.status);
  try { 
        let user = { 
          codigoSap:2,
          nombre: this.name.value,
          email: this.email.value,
          tipoCliente: this.clientType.value,
          zona: this.zona.value,
          // representados: this.representados.value
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
setResetName() {
  this.name.reset(); 
}
// changeValue() {
//   console.log(this.married.value);
//   this.married = new FormControl(!this.married.value);
// }
}
