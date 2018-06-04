import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';

@Component({
    selector: 'console-navbar',
    templateUrl: './console.navbar.component.html',
    styleUrls: ['./navbar.component.css']
  
})
export class ConsoleNavbarComponent implements OnInit {
  clients: void;
  @Input() columns: string[];
  public ActualUser;  
  constructor(private ConsoleService: ConsoleService) { }
 
  ngOnInit() {
    this.clients = this.getClient();
    this.columns = this.ConsoleService.getColumns(); 
  }
  
  getClient() {
    try {
      this.ConsoleService.getCLients()
        .subscribe(resp => {
          var data = resp;
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
   
  }
}



  