import { Component, OnInit, Input  } from '@angular/core';
import { ConsoleService } from '../../../console/service/console.service';
import {IMyDpOptions} from 'mydatepicker';
import { FormsModule, FormGroup, FormControl, Validators }   from '@angular/forms';

@Component({
  selector: 'order-neworder-component',
  templateUrl: './orders.newOrder.component.html',
  styleUrls: ['./orders.newOrder.component.css']
})



export class NewOrderComponent implements OnInit{
  
  nomFis = new FormControl('', Validators.required);
  dirEnt = new FormControl('', Validators.required);
  cif = new FormControl('', Validators.required);
  fecEnt = new FormControl('', Validators.required); 

  clients: void;
  users: void;
  @Input() columns: string[];
  @Input() dataUser: any;
  public formGroup;
  data;
  // dataUser;
  constructor(private ConsoleService: ConsoleService) { }
  public myDatePickerOptions: IMyDpOptions  = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
}
 
  ngOnInit() {
    this.clients = this.orderDetail();
    // this.columns = this.ConsoleService.getOrderColumns(); 
    // this.users = this.userDetail();
  }
  addLine(materialSelected){
    // this.lineToAdd = materialSelected;
    // this.data["lineasPedido"] = [];
    // this.data["lineasPedido"].push(this.lineToAdd);
    // this.lineToAdd.emit(materialSelected);
  }
  orderDetail() {
    try {
      this.ConsoleService.getOrdersList()
        .subscribe(resp => {
          console.log(resp, "ordersDetail");
          this.data = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  ChangeClient(i) {
    this.data.splice(i, 1);
  }
}

