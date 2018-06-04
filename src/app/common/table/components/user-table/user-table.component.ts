import { Component, OnInit, Input } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';

// import { client } from '../../client';

@Component({
  selector: 'common-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass'],
  providers: [ConsoleService]
})

export class USerTableComponent implements OnInit {
  clients: void;
  @Input() columns: string[];

  data: any = []
  userdata: any = []
  constructor(private ConsoleService: ConsoleService) { }
 
  ngOnInit() {
    this.clients = this.getClient();
    this.columns = this.ConsoleService.getUsersColumns(); 
  }

  getClient() {
    try {
      this.ConsoleService.getUsers()
        .subscribe(resp => {
          console.log(resp, "clients");
          this.data = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  SelectRow(i) {
    $("#usertable tr")[i+1].classList.add("isSelected");
  }
}



  