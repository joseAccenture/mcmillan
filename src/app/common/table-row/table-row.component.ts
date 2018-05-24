import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.sass']
})
export class TableRowComponent implements OnInit {
  @Input() character: string[];
  @Input() columns: string[];
  constructor() { }

  ngOnInit() {
  }

}
