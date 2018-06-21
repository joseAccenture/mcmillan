import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ConsoleService} from '../../console/service/console.service';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userActive: any;
  userData: string;
  data: Object;
  constructor(private ConsoleService: ConsoleService, private router: Router) { }  

  isOkUser(user, pass, data) {
      var resultado = "";
      for (var i in data) {
        if (user ===data[i].email && pass===data[i].password){
    $("#secondNav").css("display","flex");
    $('.breadcrumb').css("display","block");
    $('.navbar').css("display","flex");
          this.userActive = data[i];
          var url ='/homeview';
          let navigationExtras: NavigationExtras = {
            queryParams: {
              codigoSap:this.userActive["codigoSap"],
              email: this.userActive["email"],
              id:this.userActive["id"],
              nombre:this.userActive["nombre"],
              password:this.userActive["password"],
              representados:this.userActive["representados"],
              tipoCliente: this.userActive["tipoCliente"],
              zona: this.userActive["zona"]
  }
          }
      this.router.navigate([url], navigationExtras);
        }
      }
  }
  OnLogin(user, pass){
    try {
      this.ConsoleService.getUsers()
        .subscribe(resp => {
          console.log(resp, "Login");
          this.data = resp
          this.isOkUser(user, pass, this.data);

        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  onKey(box){
    console.log(box)
  }
  ngOnInit() {
    $("#secondNav").css("display","none");
    $('.breadcrumb').css("display","none");
    $('.navbar').css("display","none");
  }
}


