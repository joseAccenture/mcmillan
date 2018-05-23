import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Circuit } from "../../../shared/model/circuit.model";
import { ApiRestService } from "../../../shared/api/api.service";

@Injectable()
export class CircuitService {

    //_Url = "../../../app/mock/circuits.json";

    private base_Url: string = "http://localhost:8081/api/circuit";
    
    constructor(private webApi: ApiRestService, private http : Http) {
        
    }
    
    getItems(): Observable<Circuit[]> {
        return this.webApi.getService(this.base_Url);
    }

    getCircuitById(id: string): Promise<Circuit> {
        return this.http.get(this.base_Url + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}