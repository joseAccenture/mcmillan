import { Component, OnInit, Inject } from '@angular/core';

import { Sollicitud } from "../../../shared/model/sollicitud.model";
import { SollicitudService } from "../../service/sollicitud.service";

import { LOG_SERVICE, LogService } from "../../../shared/log/log.service";

@Component({
    selector: 'sollicitud-llistar',
    templateUrl: './sollicitud.llistar.component.html'
  })
export class SollicitudLlistarComponent implements OnInit {

    errorMessage: string;
    storeSollicituds: Sollicitud[] = [];
  
    constructor(private peticioService: SollicitudService, @Inject(LOG_SERVICE) private logger: LogService) { 
        this.logger.logInfoMessage("Sollicitud Llistar");
        this.peticioService.getSollicituds().subscribe(
            data => this.storeSollicituds = data,
            error => this.errorMessage = <any>error
        );
    }
  
    ngOnInit(): void {
    }
}