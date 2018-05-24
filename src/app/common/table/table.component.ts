import { Component, OnInit } from '@angular/core';
import { CommonTableService } from './service/common-table.service';
import { client } from '../../client';

@Component({
  selector: 'common-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit {
  characters: client[];
  columns: string[];
  values :string;
  value :void;
  constructor(private CommonTableService: CommonTableService) { }
  getCharacters(): void {
      this.characters = this.CommonTableService.getCharacters();
      console.log(this.characters);
    }
    ChangeClient($event){
      return (this.CommonTableService.ChangeClient($event));
    } 
    
  ngOnInit() {
    this.columns = this.CommonTableService.getColumns(); 
    this.characters = this.CommonTableService.getCharacters();
    // this.value = this.ChangeClient(event);
  }

}



  