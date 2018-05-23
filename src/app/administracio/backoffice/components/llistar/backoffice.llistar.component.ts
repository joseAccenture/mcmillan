import { Component, OnInit, Inject } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Backoffice } from "../../../../shared/model/backoffice.model";
import { BackofficeService } from "../../service/backoffice.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";

@Component({
    selector: 'backoffice-llistar',
    templateUrl: './backoffice.llistar.component.html'
})
export class BackofficeLlistarComponent implements OnInit {

    errorMessage: string;
    storeBackoffices: Backoffice[] = [];
  
    constructor(private backofficeService: BackofficeService, 
        @Inject(LOG_SERVICE) private logger: LogService) { 
        
    }
  
    ngOnInit(): void {
        this.logger.logInfoMessage("Backoffice Llistar");
        this.backofficeService.getBackoffices().subscribe(
            data => this.storeBackoffices = data,
            error => this.errorMessage = <any>error
        );
    }

    // Form Definition
    searchForm = new FormGroup (
        {
            codi: new FormControl("codi", Validators.maxLength(50)),
            nom: new FormControl("nom", Validators.maxLength(50))
        }
    );

    // Form Submit 
    onFormSubmit() {
    
        let codi = this.searchForm.get('codi').value.trim();
        let nom = this.searchForm.get('nom').value.trim();

        this.storeBackoffices = null;

        this.backofficeService
            .filterBackoffices(codi, nom)
            .then(result => {
                this.storeBackoffices = result;
                console.log(result.length);
            })
            .catch(error => this.logger.logInfoMessage(error));
        
    }
}