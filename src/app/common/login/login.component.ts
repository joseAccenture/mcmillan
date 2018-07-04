import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ConsoleService} from '../../console/service/console.service';
import { ConsoleDataService} from '../../console/service/consoleData.service';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Object;
  correctLogin: boolean = false;
  isErrorUser() {
  this.correctLogin = !this.correctLogin;
  }
  userActive: any;
  userData: string;
  data: Object;
  userToVal: object;
  constructor(private ConsoleService: ConsoleService, private ConsoleDataService: ConsoleDataService, private router: Router) { }  
  
  onSearchChange(searchValue : string ) {  
    if (searchValue === ""){
       this.correctLogin = !this.correctLogin;
       setTimeout(function() {
        this.correctLogin = false;
        }.bind(this), 3000);
   
    }
  }
  isOkUser(data) {
    var url ='/homeview';
      $("#secondNav").css("display","flex");
      $('.breadcrumb').css("display","block");
      $('.navbar').css("display","flex");
        this.user = data
        this.ConsoleDataService.userActive(this.user);
        this.router.navigate([url]);
     
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
          if (resp ===null){
            this.isErrorUser();
          }else{
            this.isOkUser(this.data);  
          }
          
        },
          error => {
            console.log(error, "error");
            this.isErrorUser();
          })
    } catch (e) {
      console.log(e);
    }
  }
  ngOnInit() {
    $("#secondNav").css("display","none");
    $('.breadcrumb').css("display","none");
    $('.navbar').css("display","none");
  }
}


