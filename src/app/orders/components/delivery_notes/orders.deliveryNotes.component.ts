import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'order-listorder-component',
  templateUrl: './orders.deliveryNotes.component.html',
  styleUrls: ['./orders.deliveryNotes.component.css']
})
export class DeliveryNotesOrderComponent {
  // orderToEdit: any;
  // public active =false;
  constructor(private router: Router){}
  // activeBtn(btnActive){
  //   this.active = btnActive;
  // }
  // editOrder(orderToEdit){
  //   this.orderToEdit = orderToEdit;
  //   console.log(orderToEdit);
  //   // var url = '/detailOrder';
  //   // this.router.navigate([url], { queryParams: { orderToedit:  orderToedit} });
  // }
  // navigateToDetail(){
  //   var url ='/detailOrder';
  //   this.router.navigate([url], { queryParams: { orderToedit:  this.orderToEdit.referencia} });

  // }
  
}
