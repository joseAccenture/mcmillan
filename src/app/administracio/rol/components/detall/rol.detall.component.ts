import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router, Params } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';

import { Rol } from "../../../../shared/model/rol.model";
import { RolService } from "../../service/rol.service";

import { LOG_SERVICE, LogService } from "../../../../shared/log/log.service";

@Component({
  selector: 'rol-detall',
  templateUrl: './rol.detall.component.html'
})
export class RolDetallComponent implements OnInit {

  error: any;
  rol: Rol = new Rol();
  
  constructor(
      private router: Router,
      private route: ActivatedRoute, 
      @Inject(LOG_SERVICE) private logger: LogService,
      @Inject(RolService) private roleService: RolService) { 
  }
  
  ngOnInit(): void {
    this.route.params
      // .switchMap((params: Params) => this.roleService.getRolById(params['rol-id']))
      .subscribe(data => {
        // this.rol = data;
        this.logger.logInfoMessage(this.rol);
        this.setFormValues();
      }
    );
  }
  
  // Form Definition
  rolForm = new FormGroup(
    {
      codi: new FormControl({value:'', disabled: true}),
      nom: new FormControl({value:'', disabled: true}),
      descripcio: new FormControl({value:'', disabled: true})
    }
  );	
  
  // Setting Form
  setFormValues() {
    this.rolForm.setValue({codi: this.rol.codi, nom: this.rol.nom, descripcio: this.rol.descripcio});
  }

}