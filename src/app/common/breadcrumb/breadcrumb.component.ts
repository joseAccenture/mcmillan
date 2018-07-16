import { Component, OnInit, Input } from '@angular/core';
import { BreadcrumbService } from './service/breadcrumb.service';

@Component({
  selector: 'breadcrumb-custom',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  envURL: any;
  data: any = [];
  steps: any;
  URLactual: string;

  constructor(private BreadcrumbService: BreadcrumbService) { 
  }
  getSteps(){
    try {
      this.BreadcrumbService.getSteps()
        .subscribe(resp => {
          console.log(resp, "steps");
          this.data = resp;
          this.URLactual= this.URLactual.substring(this.URLactual.indexOf('/')+ 1);
          var url = resp[this.URLactual];
        this.steps = url;
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  ngOnInit() {
    this.URLactual = window.location.pathname.slice(1).toString();
    this.getSteps();
  }
  
}

