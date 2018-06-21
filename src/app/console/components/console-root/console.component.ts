import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { ClientDataComponent } from "../../../clients/components/clientdata/client.data.component";
import { ConsoleNavbarComponent } from "../console-navbar/console.navbar.component";

@Component({
    selector: 'console-root',
    templateUrl: './console.component.html'
})
export class ConsoleRootComponent  implements OnInit{
    @ViewChild('console')childConsole:ConsoleNavbarComponent;
    @ViewChild('clients') childClients:ClientDataComponent;
    dataUser;       
    constructor() { }

    ngOnInit() {
        // this.childConsole.emitEvent
        // .subscribe(
        //   res =>
        //   {
        //   console.log("Atributo:" + res);
        //   this.childClients.dataShared = res;
        //   }
        // );
      }


change():void{
    this.childConsole.function1();
  }

  functionData(user){
      this.dataUser = user;
  }
}



