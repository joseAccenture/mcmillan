import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';

import { Organisme } from "../../../../shared/model/organisme.model";
import { OrganismeService } from "../../service/organisme.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";

@Component({
  selector: 'organisme-detall',
  templateUrl: './organisme.detall.component.html'
})
export class OrganismeDetallComponent implements OnInit {

  error: any;
  organisme: Organisme = new Organisme();
  
  constructor(
      private router: Router,
      private route: ActivatedRoute, 
      @Inject(LOG_SERVICE) private logger: LogService,
      @Inject(OrganismeService) private organismeService: OrganismeService) { 
  }
  
  ngOnInit(): void {
    this.route.params
      // .switchMap((params: Params) => this.organismeService.getOrganismeById(params['org-id']))
      .subscribe(data => {
        // this.organisme = data;
        this.logger.logInfoMessage(this.organisme);
        this.setFormValues();
      }
    );
  }
  
  // Form Definition
  organismeForm = new FormGroup(
    {
      codi: new FormControl({value:'', disabled: true}),
      nom: new FormControl({value:'', disabled: true}),
      descripcio: new FormControl({value:'', disabled: true})
    }
  );	
  
  // Setting Form
  setFormValues() {
    this.organismeForm.setValue({codi: this.organisme.codi, nom: this.organisme.nom, descripcio: this.organisme.descripcio});
  }
}