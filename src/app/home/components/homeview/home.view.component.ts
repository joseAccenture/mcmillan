import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConsoleDataService } from '../../../console/service/consoleData.service';


@Component({
  selector: 'home-view',
  templateUrl: './home.view.component.html',
  styleUrls: ['./home.view.component.css']
})
export class HomeViewComponent implements OnInit  {
  data: { codigoSap: any; email: any; nombre: any; password: any; representados: any; tipoCliente: any; zona: any; };
  constructor(private ActivatedRoute: ActivatedRoute, private ConsoleDataService: ConsoleDataService) { }
  ngOnInit(){
    this.ActivatedRoute.queryParams.subscribe(params => {
      this.data = {
        codigoSap: params.codigoSap,
        email: params.email,
        nombre: params.nombre,
        password: params.password,
        representados: params.representados,
        tipoCliente: params.tipoCliente,
        zona: params.zona
      }

  });
  this.ConsoleDataService.userActive(this.data);
  }
    
  
}