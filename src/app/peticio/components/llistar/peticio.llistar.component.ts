import { Component, OnInit, Inject } from '@angular/core';

import { Peticio } from "../../../shared/model/peticio.model";
import { PeticioService } from "../../service/peticio.service";

import { LOG_SERVICE, LogService } from "../../../shared/log/log.service";

@Component({
    selector: 'peticio-llistar',
    templateUrl: './peticio.llistar.component.html'
})
export class PeticioLlistarComponent implements OnInit {

    errorMessage: string;
    storePeticions: Peticio[] = [];
  
    constructor(private peticioService: PeticioService, @Inject(LOG_SERVICE) private logger: LogService) { 
        this.logger.logInfoMessage("Peticio Llistar");
        this.peticioService.getItems().subscribe(
            data => this.storePeticions = data,
            error =>  this.errorMessage = <any>error
        );
    }
  
    ngOnInit(): void {
    }
}