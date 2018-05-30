import { Component, OnInit, Input } from '@angular/core';
import { CommonTableClientService } from '../../service/common-table-client.service';
import { CommonTableUserService } from '../../service/common-table-user.service';

// import { client } from '../../client';

@Component({
  selector: 'common-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass'],
  providers: [CommonTableUserService]
})

export class USerTableComponent implements OnInit {
  clients: void;
  // @Input() characters: client[];
  @Input() columns: string[];

  data: any = []
  userdata: any = []
  constructor(private CommonTableUSerService: CommonTableUserService) { }
 
  ngOnInit() {
    this.clients = this.getClient();
    this.columns = this.CommonTableUSerService.getColumns(); 
  }

  getClient() {
    try {
      this.CommonTableUSerService.getCLients()
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
  
}



  