import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ConsoleDataService} from '../../../console/service/consoleData.service';

@Component({
  selector: 'users-editUser-component',
  templateUrl: './users.editUser.component.html',
  styleUrls: ['./users.editUser.component.css']
})
export class EditUserComponent {
  doAgentsList(data) {
    if (data !==""){
      if (data !=null){
        return this.data.representados.join();
      }
       
    }else{
      return null;
    }
   
  }
  public id: any;
  repCode: string;
  public isZoneBoss: boolean = false;
  public btnVisible: boolean = true;
  public isAgent: boolean = false;
  data: any;
  public userInEdit;
  optionSelected: any;
  name = new FormControl('', Validators.required);
  mail = new FormControl('', Validators.required);
  tipo = new FormControl('', Validators.required);
  zona = new FormControl('', Validators.required);

  ClientOptions = ["", "Cliente Individual", "Administrador", "Atención Cliente", "jefe de delegación", "Marketing Assistant", "Representante"];
  constructor(private UsersService: UsersService,
    private ConsoleDataService: ConsoleDataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    // location.go('/userslist');
  }

  selectUserInEdit(userInEdit) {
    console.log(userInEdit);
  }
  onOptionSelected(event) {
    console.log("optinoSelected")
  }
  onChange(clientType) {
    if (clientType === "jefe de delegación" || clientType === "Marketing Assistant") {
      this.isZoneBoss = true;
      this.isAgent = false;
    } else if (clientType === "Marketing Assistant" || clientType === "Representante") {
      this.isAgent = true;
      this.isZoneBoss = false;
    } else if(clientType === "Cliente Individual"){
      this.isAgent = true;   
      this.isZoneBoss = false;
    } else {
      this.isZoneBoss = false;
      this.isAgent = false;
    }


  }
  toggleHidden(data) {
    console.log(data);
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = Number(params['id']);
    });
    this.getUSertoEdit(this.id);
  }
  sendCredentials(){
    this.UsersService.sendCredential(this.id)
    .subscribe(resp => {
      if (resp === null){
        this.ConsoleDataService.alertFunction("credential", null);
      }
      console.log(resp, "userToedit", this.id);
      // this.data = this.datas.find(user=> user.id.toString() === this.id);
    },
      error => {
        console.log(error, "error");
      })
  }
  getUSertoEdit(idUser) {
    try {
      var userId = idUser;
      this.UsersService.getUSertoEdit(userId)
        .subscribe(resp => {
          console.log(resp, "userToedit", this.id);
          this.data = resp
          var tipo = this.data.tipoCliente
          if (tipo == "Marketing Assistant" ||tipo  == "Representante"){
            this.data.zona = null;
          }
          if(tipo ==="jefe de delegación" || tipo ==="Marketing Assistant") {
            this.data.representados = null;
          }
          if (this.data.representados) {
            this.data.representados = this.data.representados.split(',');
          }
          if (this.data.tipoCliente === "jefe de delegación" || this.data.tipoCliente === "Marketing Assistant") {
            this.isZoneBoss = true;
          } else if (this.data.tipoCliente === "Marketing Assistant" ||
            this.data.tipoCliente === "Representante" || "Cliente Individual") {
            this.isAgent = true;
          }


          // this.data = this.datas.find(user=> user.id.toString() === this.id);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  submitUser(data) {
    var cliente_tipo;
    if (this.tipo.value !==""){
      cliente_tipo = this.tipo.value;
    }else{
      cliente_tipo = this.data.tipoCliente;
    }
    let user = {
      "id": this.data.id,
      "codigoSap": this.data.codigoSap,
      "nombre": this.name.value,
      "email": this.mail.value,
      "tipoCliente": cliente_tipo,
      "zona": this.zona.value,
      "representados": this.doAgentsList(this.data.representados)
    }
    if (user){
        try {
          console.log(user, "editUser")
          this.UsersService.submitEditUser(user)
            .subscribe(resp => {
              console.log(resp, "res");
              this.data = resp
              var url = '/userslist';
              this.router.navigate([url]);
            },
              error => {
                console.log(error, "error");
              })
        } catch (e) {
          console.log(e);
        }
    }
  
  }
  InsertAgent(data, sapCodetoInclude) {
    // console.log(data, sapCodetoInclude);
    if (data.representados === null || data.representados === ""){
      data.representados = [];
    }
    data.representados.push(sapCodetoInclude);
    this.repCode = "";
    $(".listContainer").removeClass("hidden");

  }
  isShown(user, representado){
    // this.btnVisible = !this.btnVisible;
    $("."+representado).toggleClass("hidden");
  }
  deleteFromList(user){
    var index = this.data.representados.indexOf(user);
   this.data.representados.splice(index, 1);
   if (  this.data.representados.length === 0 ){
    $(".listContainer").addClass("hidden");
   }
  }

}



