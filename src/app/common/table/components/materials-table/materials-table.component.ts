import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommonTableService } from '../../../../common/table/service/common-table.service';
import { Router } from '@angular/router';


@Component({
  selector: 'common-materials-table',
  templateUrl: './materials-table.component.html',
  styleUrls: ['./materials-table.component.css'],
  providers: [CommonTableService]
})

export class MaterialsTableComponent implements OnInit {
  dataShared: any;
  materials: void;
  private newLine: any = {};
  @Output() lineToAdd: EventEmitter<string> =   new EventEmitter();

  @Input() columns: string[];
  customColumns = ["EAN", "Descripción"];

  row: any = []
  data: any = []
  userdata: any = []
  constructor(private CommonTableService: CommonTableService, private router: Router) { }
 
  ngOnInit() {
    this.materials = this.getMaterials();
    this.columns = this.CommonTableService.getMaterialsColumns(); 
  }

  getMaterials() {
    try {
      this.CommonTableService.getMaterials()
        .subscribe(resp => {
          console.log(resp, "clients");
          this.data = resp
          this.lineToAdd.emit(this.data);
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }
  addFieldValue() {
    // this.materials.push(this.newLine)
    // this.newLine = {};
}
  selectMaterial(dato) {
    this.lineToAdd.emit(dato);
    console.log(dato);
  }
  
}



  