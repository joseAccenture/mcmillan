import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Backoffice } from "../../../../shared/model/backoffice.model";
import { BackofficeService } from "../../service/backoffice.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";


@Component({
  selector: 'app-creacio',
  templateUrl: './creacio.component.html'
})
export class CreacioComponent implements OnInit {

  statusCode: number;

  constructor(private router: Router,
    private route: ActivatedRoute, 
    @Inject(LOG_SERVICE) private logger: LogService,
    @Inject(BackofficeService) private backofficeService: BackofficeService) { 

  }

  ngOnInit() {
    this.logger.logInfoMessage("Backoffice Creacio");
  }

  // Form Definition
  backofficeForm = new FormGroup (
    {
      codi: new FormControl("codi", [Validators.required, Validators.maxLength(50)]),
      nom: new FormControl("nom", [Validators.required, Validators.maxLength(50)]),
      descripcio: new FormControl("descripcio", [Validators.required, Validators.maxLength(500)])
    }
  );

  // Form Submit 
  onFormSubmit() {
    
    let backoffice = new Backoffice();
    backoffice.codi = this.backofficeForm.get('codi').value.trim();
    backoffice.nom = this.backofficeForm.get('nom').value.trim();
    backoffice.descripcio = this.backofficeForm.get('descripcio').value.trim();
    
    this.logger.logInfoMessage(backoffice);
    
    this.backofficeService.addBackoofice(backoffice)
      .then(result => {
          this.logger.logInfoMessage(result);
          this.router.navigate([ '../backoffice'])
      })
      .catch(error => this.logger.logInfoMessage(error));
  }
}
