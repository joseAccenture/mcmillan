import { Component, OnInit, Inject } from '@angular/core';

import { PermisService } from "../../service/permis.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";

@Component({
    selector: 'permis-llistar',
    templateUrl: './permis.llistar.component.html'
})
export class PermisLlistarComponent implements OnInit {

    errorMessage: string;
      
    constructor(private permisService: PermisService, 
        @Inject(LOG_SERVICE) private logger: LogService) { 
        this.logger.logInfoMessage("Permis Llistar");
    }
  
    ngOnInit(): void {
    }
}