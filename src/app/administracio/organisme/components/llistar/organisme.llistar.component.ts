import { Component, OnInit, Inject } from '@angular/core';

import { Organisme } from "../../../../shared/model/organisme.model";
import { OrganismeService } from "../../service/organisme.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";

@Component({
    selector: 'organisme-llistar',
    templateUrl: './organisme.llistar.component.html'
})
export class OrganismeLlistarComponent implements OnInit {

    errorMessage: string;
    storeOrganismes: Organisme[] = [];
  
    constructor(private organismeService: OrganismeService, 
        @Inject(LOG_SERVICE) private logger: LogService) { 
        this.logger.logInfoMessage("Backoffice Llistar");
        this.organismeService.getItems().subscribe(
            data => this.storeOrganismes = data,
            error => this.errorMessage = <any>error
        );
    }
  
    ngOnInit(): void {
    }
}