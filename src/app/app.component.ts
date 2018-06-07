import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

/**
 * Mc Portalpedidos App Component
 * 
 * Autor: Sergio Salazar Cardoso
 */
@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]

})
export class AppComponent {

  data: any = []
  login = {
    id: '',
    name: '',
    rol: ''
  }
  constructor(public appService: AppService) { }

  ngOnInit() {
    this.userLogin();
  }
  /* method to call get-api from app.service */
  userLogin() {
    try {
      this.appService.getLogin()
        .subscribe(resp => {
          console.log(resp, "Login");
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

