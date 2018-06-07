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
  filterTable($event, searchby) {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "none";
        } else {
          tr[i].style.display = "";
        }
      } 
    }
  }
  selectMaterial(dato) {
    this.lineToAdd.emit(dato);
    console.log(dato);
  }
  
}



  