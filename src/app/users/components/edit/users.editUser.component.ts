import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../service/users.service';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'users-editUser-component',
  templateUrl: './users.editUser.component.html',
  styleUrls: ['./users.editUser.component.css']
})
export class EditUserComponent {
  public id: any;
  repCode: string;
  public isZoneBoss: boolean = false;
  public isAgent: boolean = false;
  data: any;
  public userInEdit;
  optionSelected: any;
  name = new FormControl('', Validators.required);
  mail = new FormControl('', Validators.required);
  tipo = new FormControl('', Validators.required);
  zona = new FormControl('', Validators.required);

  options = ["", "Cliente Individual", "Administrador", "Atención Cliente", "Jefe de Zona", "Jefe de Marketing", "Representante"];
  constructor(private UsersService: UsersService,
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
    if (clientType === "Jefe de Zona") {
      this.isZoneBoss = true;
      this.isAgent = false;
    } else if (clientType === "Jefe de Marketing" || clientType === "Representante") {
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

  getUSertoEdit(idUser) {

    try {
      var userId = idUser;
      this.UsersService.getUSertoEdit(userId)
        .subscribe(resp => {
          console.log(resp, "userToedit", this.id);
          this.data = resp
          if (this.data.representados) {
            this.data.representados = this.data.representados.split(',');
          }
          if (this.data.tipoCliente === "Jefe de Zona") {
            this.isZoneBoss = true;
          } else if (this.data.tipoCliente === "Jefe de Marketing" ||
            this.data.tipoCliente === "Representante") {
            this.isAgent = true;
            this.isZoneBoss = true;
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
    try {
      let user = {
        "id": this.data.id,
        "codigoSap": this.data.codigoSap,
        "nombre": this.name.value,
        "email": this.mail.value,
        "tipoCliente": this.tipo.value,
        "zona": this.zona.value,
        "representados": this.data.representados.join()
      }
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
  InsertAgent(data, sapCodetoInclude) {
    console.log(data, sapCodetoInclude);
    data.representados.push(sapCodetoInclude);
  }

}



