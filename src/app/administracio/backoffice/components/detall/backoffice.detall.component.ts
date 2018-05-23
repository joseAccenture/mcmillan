import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';

import { Backoffice } from "../../../../shared/model/backoffice.model";
import { BackofficeService } from "../../service/backoffice.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";

@Component({
  selector: 'backoffice-detall',
  templateUrl: './backoffice.detall.component.html'
})
export class BackofficeDetallComponent implements OnInit {

  error: any;
  backoffice: Backoffice = new Backoffice();

  constructor(
      private router: Router,
      private route: ActivatedRoute, 
      @Inject(LOG_SERVICE) private logger: LogService,
      @Inject(BackofficeService) private backofficeService: BackofficeService) { 
  }

  ngOnInit(): void {
    // this.route.params
    //   // .switchMap((params: Params) => this.backofficeService.getBackofficeById(params['bo-id']))
    //   .subscribe(data => {
    //     this.backoffice = data;
    //     this.logger.logInfoMessage(this.backoffice);
    //     this.setFormValues();
      }
    // );
  }

  // Form Definition
  // backofficeForm = new FormGroup(
  //   {
  //     codi: new FormControl({value:'', disabled: true}),
  //     nom: new FormControl({value:'', disabled: true}),
  //     descripcio: new FormControl({value:'', disabled: true})
  //   }
  // );	
  
  // Setting Form
//   setFormValues() {
//     this.backofficeForm.setValue({codi: this.backoffice.codi, nom: this.backoffice.nom, descripcio: this.backoffice.descripcio});
//   }	
// }