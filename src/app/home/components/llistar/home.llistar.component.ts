import { Component, OnInit, Inject } from '@angular/core';

import { HomeService } from "../../service/home.service";

import { LOG_SERVICE, LogService } from "../../../shared/log/log.service";

@Component({
    selector: 'home-llistar',
    templateUrl: './home.llistar.component.html'
})
export class HomeLlistarComponent implements OnInit {

    constructor(private homeService: HomeService, @Inject(LOG_SERVICE) private logger: LogService) { 
        this.logger.logInfoMessage("Home Llistar");
    }
  
    ngOnInit(): void {
    }
}