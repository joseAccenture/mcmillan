import { Component, OnInit } from '@angular/core';
import { HomeService } from './home/service/home.service';
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
  providers: [AppService, HomeService]

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
    this.USerLoign();
  }
  /* method to call get-api from app.service */
  USerLoign() {
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

