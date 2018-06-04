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
  // ejemplo post en componente
 /* method to call post-api from app.service */
//  submitAuth(formValues) {
//   try {
//     let author = {
//       FirstName: formValues.FirstName,
//       ID: formValues.ID,
//       IDBook: formValues.IDBook,
//       LastName: formValues.LastName
//     }
    // console.log(author,"author")
//     this.appService.submitAuthor(author)
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

}

