import { Component, OnInit, Inject } from '@angular/core';

import { Rol } from "../../../../shared/model/rol.model";
import { RolService } from "../../service/rol.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";

@Component({
    selector: 'rol-llistar',
    templateUrl: './rol.llistar.component.html'
})
export class RolLlistarComponent implements OnInit {

    errorMessage: string;
    storeRoles: Rol[] = [];
  
    constructor(private rolService: RolService, 
        @Inject(LOG_SERVICE) private logger: LogService) { 
        this.logger.logInfoMessage("Rol Llistar");
        this.rolService.getItems().subscribe(
            data => this.storeRoles = data,
            error => this.errorMessage = <any>error
        );
    }
  
    ngOnInit(): void {
    }
}