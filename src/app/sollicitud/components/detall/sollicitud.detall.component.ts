import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';

import { SollicitudDetall } from "../../../shared/model/sollicitud.detall.model";
import { SollicitudService } from "../../service/sollicitud.service";

import { LOG_SERVICE, LogService } from "../../../shared/log/log.service";

@Component({
  selector: 'sollicitud-detall',
  templateUrl: './sollicitud.detall.component.html'
})
export class SollicitudDetallComponent implements OnInit {

  error: any;
  sollicitud: SollicitudDetall = new SollicitudDetall();

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      @Inject(LOG_SERVICE) private logger: LogService, 
      @Inject(SollicitudService) private sollicitudService: SollicitudService) { 
  }

  ngOnInit(): void {
    this.route.params
      // .switchMap((params: Params) => this.sollicitudService.getSollicitudById(params['sol-id'],params['org-id'], params['bo-id'], params['pet-id']))
      .subscribe(data => {
        // this.sollicitud = data;
        this.logger.logInfoMessage(this.sollicitud);
        this.setFormValues();
      }
    );
  }

  
  sollicitudForm = new FormGroup(
    {
      codi: new FormControl(),
      organisme: new FormControl(),
      backoffice: new FormControl(),
      lot: new FormControl(),
      peticio: new FormControl(),
      referencia: new FormControl(),
      expedient: new FormControl(),
      titol: new FormControl(),
      circuit: new FormControl(),
      versio: new FormControl(),
      transaccio: new FormControl(),
      sequencia: new FormControl(),
      estatProcess: new FormControl(),
      dataActualitzacioEstatProcess: new FormControl(),
      estatFuncional: new FormControl(),
      dataActualitzacioEstatFuncinoal: new FormControl(),
      idEvidencia: new FormControl(),
      dataAceptacio: new FormControl(),
      idRebut: new FormControl(),
      canal: new FormControl(),
      descripcio: new FormControl(),
      resposta:new FormControl(),
      descripcioRespota: new FormControl(),
      remesa: new FormControl()
    }
  );	
  
  setFormValues() {
    this.sollicitudForm.setValue(
      {
        codi: this.sollicitud.codi, 
        organisme: this.sollicitud.organisme,
        backoffice: this.sollicitud.backoffice,
        lot: this.sollicitud.lot,
        peticio: this.sollicitud.peticio,
        referencia: this.sollicitud.referencia,
        expedient: this.sollicitud.expedient,
        titol: this.sollicitud.titol,
        circuit: this.sollicitud.circuit,
        versio: this.sollicitud.versio,
        transaccio: this.sollicitud.transaccio,
        sequencia: this.sollicitud.sequencia,
        estatProcess: this.sollicitud.estatProcess,
        dataActualitzacioEstatProcess: this.sollicitud.dataActualitzacioEstatProcess,
        estatFuncional: this.sollicitud.estatFuncional,
        dataActualitzacioEstatFuncinoal: this.sollicitud.dataActualitzacioEstatFuncinoal,
        idEvidencia: this.sollicitud.idEvidencia,
        dataAceptacio: this.sollicitud.dataAceptacio,
        idRebut: this.sollicitud.idRebut,
        canal: this.sollicitud.canal,
        descripcio: this.sollicitud.descripcio,
        resposta: this.sollicitud.resposta,
        descripcioRespota: this.sollicitud.descripcioRespota,
        remesa: this.sollicitud.remesa
      }
    );
  }	
}