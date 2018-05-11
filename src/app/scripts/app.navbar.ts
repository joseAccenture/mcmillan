import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: '../views/app.navbar.html',
  styleUrls: ['../styles/app.navbar.css']
})
export class AppNavbar implements OnInit {
  title = 'app';
  ngOnInit() {
    }
  goBack(): void {
   alert('Goback');
    // var menu = document.getElementById("drop");
    // menu.addClass("sergio");
  }
}
