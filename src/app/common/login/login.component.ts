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
  isErrorUser() {
   console.log("usuario no correcto, repite el login con datos correctos");
  }
  userActive: any;
  userData: string;
  data: Object;
  userToVal: object;
  constructor(private ConsoleService: ConsoleService, private router: Router) { }  

  isOkUser(data) {
    var url ='/homeview';
      let navigationExtras: NavigationExtras = {
        queryParams: {
          codigoSap:data["codigoSap"],
          email: data["email"],
          id:data["id"],
          nombre:data["nombre"],
          password:data["password"],
          representados:data["representados"],
          tipoCliente: data["tipoCliente"],
          zona: data["zona"]
        }
      }
      $("#secondNav").css("display","flex");
      $('.breadcrumb').css("display","block");
      $('.navbar').css("display","flex");
      this.router.navigate([url], navigationExtras);
      // for (var i in data) {
      //   if (user ===data[i].email && pass===data[i].password){
      //     $("#secondNav").css("display","flex");
      //     $('.breadcrumb').css("display","block");
      //     $('.navbar').css("display","flex");
      //     this.userActive = data[i];
      //     var url ='/homeview';
      //     let navigationExtras: NavigationExtras = {
      //       queryParams: {
      //         codigoSap:this.userActive["codigoSap"],
      //         email: this.userActive["email"],
      //         id:this.userActive["id"],
      //         nombre:this.userActive["nombre"],
      //         password:this.userActive["password"],
      //         representados:this.userActive["representados"],
      //         tipoCliente: this.userActive["tipoCliente"],
      //         zona: this.userActive["zona"]
      //       }
      //     }
      // this.router.navigate([url], navigationExtras);
      //   }
      // }
  }
  OnLogin(user, pass){
    this.userToVal = {
      email: user,
      password: pass
    }
    try {
      this.ConsoleService.getLogin(this.userToVal)
        .subscribe(resp => {
          console.log(resp, "Login");
          this.data = resp
          this.isOkUser(this.data);
        },
          error => {
            console.log(error, "error");
            this.isErrorUser();
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


