import { Component, OnInit, Inject } from '@angular/core';

import { Usuari } from "../../../../shared/model/usuari.model";
import { UsuariService } from "../../service/usuari.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";

@Component({
    selector: 'usuari-llistar',
    templateUrl: './usuari.llistar.component.html'
})
export class UsuariLlistarComponent implements OnInit {

    errorMessage: string;
    storeUsuaris: Usuari[] = [];
  
    constructor(private usuariService: UsuariService, 
        @Inject(LOG_SERVICE) private logger: LogService) { 
        this.logger.logInfoMessage("Usuaris Llistar");
        this.usuariService.getItems().subscribe(
            data => this.storeUsuaris = data,
            error => this.errorMessage = <any>error
        );
    }
  
    ngOnInit(): void {
    }
}