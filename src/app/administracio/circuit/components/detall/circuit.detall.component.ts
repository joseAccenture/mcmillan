import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';

import { Circuit } from "../../../../shared/model/circuit.model";
import { CircuitService } from "../../service/circuit.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";

@Component({
  selector: 'circuit-detall',
  templateUrl: './circuit.detall.component.html'
})
export class CircuitDetallComponent implements OnInit {

  error: any;
  circuit: Circuit = new Circuit();
  
  constructor(
      private router: Router,
      private route: ActivatedRoute, 
      @Inject(LOG_SERVICE) private logger: LogService,
      @Inject(CircuitService) private circuitService: CircuitService) { 
  }
  
  ngOnInit(): void {
    // this.route.params
    //   .switchMap((params: Params) => this.circuitService.getCircuitById(params['cir-id']))
    //   .subscribe(data => {
    //     this.circuit = data;
    //     this.logger.logInfoMessage(this.circuit);
    //     this.setFormValues();
    //   }
    // );
  }
  
  // Form Definition 
  circuitForm = new FormGroup(
    {
      codi: new FormControl({value:'', disabled: true}),
      nom: new FormControl({value:'', disabled: true}),
      descripcio: new FormControl({value:'', disabled: true})
    }
  );	
  
  // Form Setting
  setFormValues() {
    this.circuitForm.setValue({codi: this.circuit.codi, nom: this.circuit.nom, descripcio: this.circuit.descripcio});
  }

}