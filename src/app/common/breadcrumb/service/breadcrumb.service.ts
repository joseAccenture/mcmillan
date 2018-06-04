import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  lastStep: string[];
// getCharacters(): client[] {
//   return CLIENTS;
// }
STEPS: Observable<any>;

Url = "./assets/mock";
 
  constructor(private http : HttpClient) {
      
  }
     getSteps() {
      console.log(this.http.get(this.Url + '/breadcrumb.json'))
      return this.STEPS = this.http.get(this.Url + '/breadcrumb.json');
    }
}


