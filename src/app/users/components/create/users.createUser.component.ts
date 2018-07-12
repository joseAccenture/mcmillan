import { Component, Input } from '@angular/core';
import { UsersService} from '../../service/users.service';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';
import { ConsoleDataService} from '../../../console/service/consoleData.service';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'users-createuser-component',
  templateUrl: './users.createUser.component.html',
  styleUrls: ['./users.createUser.component.css']
})
export class CreateUserComponent {
  @Input() data: any;
  public formGroup;
  ClientOptions = ["", "Cliente Individual", "Administrador", "Atención Cliente", "jefe de delegación", "Marketing Assistant", "Representante"];
  repCode: string;
  public isZoneBoss: boolean = false;
  public representadoLista =[];
  public btnVisible: boolean = true;
  public isAgent: boolean = false;
  public empty: boolean = true;
  optionSelected: any;
  public IsDisabled: boolean = false;
  public SendForm = new FormGroup({
    nombre: new FormControl(),
    email: new FormControl(),
    zona:new FormControl()
  });

  // nombre = new FormControl(this.nombre);
  // email = new FormControl(this.email);  
  // zona = new FormControl(this.zona);

  name = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  email = new FormControl('', Validators.required);  
  zona = new FormControl('', Validators.required);
  tipo = new FormControl('', Validators.required);

  // codigoSap = new FormControl(6);
  clientType = new FormControl('');
  representados = new FormControl({"codigoSap": 1, "nombre": "Jonh Ford"});
  
 constructor(private UsersService: UsersService, private router:Router, private ConsoleDataService:ConsoleDataService){}
 

 InsertAgent(sapCodetoInclude) {
    if (this.representadoLista.length <=0){
      this.representadoLista = [];
    }
    
    this.representadoLista.push(sapCodetoInclude);
    if (this.tipo.value ==="Cliente Individual"){
      this.IsDisabled = true;
    }
    this.repCode = "";
    this.empty = false;
    $(".listContainer").removeClass("hidden");
}
onChange(clientType) {
  if (clientType === "jefe de delegación" || clientType === "Marketing Assistant") {
    this.isZoneBoss = true;
    this.isAgent = false;
  } else if (clientType === "Representante") {
    this.isAgent = true;
    this.isZoneBoss = false;
    this.IsDisabled = false;
  } else if(clientType === "Cliente Individual"){
    if (this.representadoLista.length >0){
      this.IsDisabled = true;
    }else{
      this.IsDisabled = false;
    }
    
    this.isAgent = true;   
    this.isZoneBoss = false;
  } else {
    this.isZoneBoss = false;
    this.isAgent = false;
  }
}
submitUser(data) {
  if (this.tipo.value === "Jefe de delegación" || this.tipo.value === "Administrador"){
    var codigo= null;
  }else{
    codigo = this.representadoLista[0];
  }
  try {
    let user = {
      "codigoSap":codigo,
      "nombre": this.name.value,
      "email": this.email.value,
      "tipoCliente": this.tipo.value,
      "zona": this.zona.value,
      "representados": this.representadoLista.join(),
    }
    console.log(user, "editUser")
    this.UsersService.submitNewUser(user)
      .subscribe(resp => {
        console.log(resp, "res");
        this.data = resp
        if (resp ===null){
          // var url = '/userslist';
          this.ConsoleDataService.alertFunction(201, this.email.value);
        }
      },
        error => {
          if (error.status ===409){
            // var url = '/userslist';
            this.ConsoleDataService.alertFunction(error.status, this.email.value);
          }
          console.log(error, "error");
        })
  } catch (e) {
    console.log(e);
  }
}  
isShown(user, representado){
  // this.btnVisible = !this.btnVisible;
  $("."+representado).toggleClass("hidden");
}
deleteFromList(user){
  var index = this.representadoLista.indexOf(user);
 this.representadoLista.splice(index, 1);
 if (  this.representadoLista.length === 0 ){
  $(".listContainer").addClass("hidden");
  this.empty = true;
 }
}
setNameValue() {
 
  // console.log('Name: ' + this.name.value);
  // console.log('Validation Status: ' + this.name.status);
  try { 
        let user = { 
          codigoSap:this.ConsoleDataService.codigoSap,
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
