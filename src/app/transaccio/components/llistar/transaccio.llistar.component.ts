/*
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'transaccio-llistar',
  templateUrl: './transaccio.llistar.component.html'
})
export class TransaccioLlistarComponent implements OnInit {

    constructor(private router:Router) {
    }

    private tasks = [
        {id: '1', title: 'Code Cleanup-TRAN'},
        {id: '2', title: 'Review Code-TRAN'},
        {id: '3', title: 'Build to Prod-TRAN'}
    ];
    private errorMessage:any = '';

    onSelect(task) {
        this.router.navigate(['/backoffice', task.id]);
    }

    ngOnInit() {
    }
}
*/

import { Component, OnInit, Inject } from '@angular/core';

import { Transaccio } from "../../../shared/model/transaccio.model";
import { TransaccioService } from "../../service/transaccio.service";

import { LOG_SERVICE, LogService } from "../../../shared/log/log.service";

@Component({
    selector: 'transaccio-llistar',
    templateUrl: './transaccio.llistar.component.html'
  })
  export class TransaccioLlistarComponent implements OnInit {

    errorMessage: string;
    storeTransaccions: Transaccio[] = [];
  
    constructor(private transaccioService: TransaccioService, @Inject(LOG_SERVICE) private logger: LogService) { 
        this.logger.logInfoMessage("Transsacio Llistar");
        this.transaccioService.getTransaccions().subscribe(
            data => this.storeTransaccions = data,
            error => this.errorMessage = <any>error
        );
    }
  
    ngOnInit(): void {
    }
}