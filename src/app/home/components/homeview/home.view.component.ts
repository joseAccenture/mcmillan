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
}