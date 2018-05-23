import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';

import { TransaccioDetall } from "../../../shared/model/transaccio.detall.model";
import { TransaccioService } from "../../service/transaccio.service";

import { LOG_SERVICE, LogService } from "../../../shared/log/log.service";

@Component({
  selector: 'transaccio-detall',
  templateUrl: './transaccio.detall.component.html'
})
export class TransaccioDetallComponent implements OnInit {

  error: any;
  transaccio: TransaccioDetall = new TransaccioDetall();

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      @Inject(LOG_SERVICE) private logger: LogService, 
      @Inject(TransaccioService) private sollicitudService: TransaccioService) { 
  }

  ngOnInit(): void {
    this.route.params                                                         
      // .switchMap((params: Params) => this.sollicitudService.getTransaccioById(params['tran-id'],params['org-id'], params['bo-id'], params['pet-id'], params['sol-id']))
      .subscribe(data => {
        // this.transaccio = data;
        this.logger.logInfoMessage(this.transaccio);
        this.setFormValues();
      }
    );
  }

  transaccioForm = new FormGroup(
    {
      organisme: new FormControl(),
      backoffice: new FormControl(),
      lot: new FormControl(),
      peticio: new FormControl(),
      sollicitud: new FormControl(),
      referencia: new FormControl(),
      expedient: new FormControl(),
      titol: new FormControl(),
      circuit: new FormControl(),
      versio: new FormControl(),
      transaccio: new FormControl(),
      sequencia: new FormControl(),
      transaccioFinal: new FormControl(),
      descripcio: new FormControl(),
      codiResposta:new FormControl(),
      descripcioRespota: new FormControl(),
      remesa: new FormControl()
    }
  );	
  
  setFormValues() {
    this.transaccioForm.setValue(
      {
        organisme: this.transaccio.organisme,
        backoffice: this.transaccio.backoffice,
        lot: this.transaccio.lot,
        peticio: this.transaccio.peticio,
        sollicitud: this.transaccio.sollicitud,
        referencia: this.transaccio.referencia,
        expedient: this.transaccio.expedient,
        titol: this.transaccio.titol,
        circuit: this.transaccio.circuit,
        versio: this.transaccio.versio,
        transaccio: this.transaccio.transaccio,
        sequencia: this.transaccio.sequencia,
        transaccioFinal: this.transaccio.transaccioFinal,
        descripcio: this.transaccio.descripcio,
        codiResposta: this.transaccio.codiResposta,
        descripcioRespota: this.transaccio.descripcioRespota,
        remesa: this.transaccio.remesa
      }
    );
  }	
}