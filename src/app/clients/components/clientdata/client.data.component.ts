import { Component, Input } from '@angular/core';
import { ConsoleDataService } from '../../../console/service/consoleData.service';

@Component({
  selector: 'client-data-component',
  templateUrl: './client.data.component.html',
  styleUrls: ['./client.data.component.css']
  
})
export class ClientDataComponent {
  client: any;
  isInitialized: boolean;
  subscriptions: any;
  clientdata: void;
  title = 'app';
  clients: void;
  
 
  @Input() dataShared:boolean = false;
  // @Input() steps: string[];
  @Input() columns: string[];
  isUser: true;
  data: any = []
  // data2: any = []
  
  constructor(private ConsoleDataService: ConsoleDataService) {     
  }
}