import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConsoleService } from '../../../../console/service/console.service';
import { Router } from '@angular/router';

@Component({
  selector: 'common-neworder-table',
  templateUrl: './newOrder-table.component.html',
  styleUrls: ['./newOrder-table.component.css'],
  providers: [ConsoleService]
})

export class NewOrderTableComponent implements OnInit {


  @Input() columns: string[];
 customColumns = ["Referencia", "Estado", "Fecha", "Descripción"];
  
  data: any = []
  @Output() lineToAdd: EventEmitter<string> =   new EventEmitter();

  constructor(private ConsoleService: ConsoleService, private router: Router) { }

  ngOnInit() {
    this.data = this.getOrdersList();

  }
 
  getOrdersList() {
          this.data = this.lineToAdd
      
  }
  addLine(rowData){
    console.log(rowData);
  }
  
}  