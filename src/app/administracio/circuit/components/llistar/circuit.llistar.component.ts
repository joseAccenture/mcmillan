import { Component, OnInit, Inject } from '@angular/core';

import { Circuit } from "../../../../shared/model/circuit.model";
import { CircuitService } from "../../service/circuit.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";

@Component({
    selector: 'circuit-llistar',
    templateUrl: './circuit.llistar.component.html'
})
export class CircuitLlistarComponent implements OnInit {

    errorMessage: string;
    storeCircutis: Circuit[] = [];
  
    constructor(private rolService: CircuitService, 
        @Inject(LOG_SERVICE) private logger: LogService) { 
        this.logger.logInfoMessage("Circuits Llistar");
        this.rolService.getItems().subscribe(
            data => this.storeCircutis = data,
            error => this.errorMessage = <any>error
        );
    }
  
    ngOnInit(): void {
    }
}