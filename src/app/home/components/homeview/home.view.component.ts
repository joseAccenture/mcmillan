import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HomeService } from '../../service/home.service';
import { user } from '../../../user';

@Component({
  selector: 'home-view',
  templateUrl: './home.view.component.html',
  styleUrls: ['./home.view.component.css']
})
export class HomeViewComponent  {
    users: user[];
    constructor(private homeService: HomeService) { }
    getUsers(): void {
        this.users = this.homeService.getUsers();
        console.log(this.users);
      }
      ngOnInit() {
        var users = this.getUsers();

      }
      myFunction() {
        // Declare variables 
        var input, filter, table, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          } 
        }
      }
}