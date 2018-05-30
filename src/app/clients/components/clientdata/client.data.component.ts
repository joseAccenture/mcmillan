import { Component, OnInit, Input } from '@angular/core';
// import { CommonTableUserService } from '../../../common/table/service/common-table-user.service';

@Component({
  selector: 'users-listuser-component',
  templateUrl: './client.data.component.html',
  styleUrls: ['./client.data.component.css']
  
})
export class ClientDataComponent {
  // title = 'app';
  // clients: void;
  // // @Input() steps: string[];
  // @Input() columns: string[];
  // isUser: true;
  // data: any = []
  // client = [{
  //   id: '',
  //   codi: '',
  //   organisme: ''
  // }]
  // constructor(private CommonTableUserService: CommonTableUserService) { }
 
  // ngOnInit() {
  //   var isUser = true;
  //   this.clients = this.getUSers();
  //   this.columns = this.CommonTableUserService.getColumns(); 
  // }

  // getUSers() {
  //   try {
  //     this.CommonTableUserService.getCLients()
  //       .subscribe(resp => {
  //         console.log(resp, "users");
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
