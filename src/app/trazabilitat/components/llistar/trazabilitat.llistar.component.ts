import { Component, OnInit, Inject } from '@angular/core';

import { Traza } from "../../../shared/model/traza.model";
import { TrazabilitatService } from "../../service/trazabilitat.service";

import { LOG_SERVICE, LogService } from "../../../shared/log/log.service";

@Component({
    selector: 'trazabilitat-llistar',
    templateUrl: './trazabilitat.llistar.component.html'
})
export class TrazabilitatLlistarComponent implements OnInit {

    errorMessage: string;
    storeTraza: Traza[] = [];
  
    constructor(private trazaService: TrazabilitatService, @Inject(LOG_SERVICE) private logger: LogService) { 
        this.logger.logInfoMessage("Traza Llistar");
        this.trazaService.getItems().subscribe(
            data => this.storeTraza = data,
            error => this.errorMessage = <any>error
        );
    }
  
    ngOnInit(): void {
    }
}