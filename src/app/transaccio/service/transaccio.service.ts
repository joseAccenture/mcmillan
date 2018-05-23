import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Transaccio } from "../../shared/model/transaccio.model";
import { TransaccioDetall } from "../../shared/model/transaccio.detall.model";
import { ApiRestService } from "../../shared/api/api.service";

import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class TransaccioService {

    //_Url = "../app/mock/transaccions.json";
    
    private base_Url: string = "http://localhost:8081/api/transaccio";

    constructor(private webApi: ApiRestService, private http : Http) {
        
    }
    
    getTransaccions(): Observable<Transaccio[]> {
        return this.webApi.getService(this.base_Url);
    }
   
    getTransaccioById(tranId: string, orgId: string, boId: string, petId: string, solId: string): Promise<TransaccioDetall> {
        return this.http.get(this.base_Url 
            + '/' + tranId 
            + '/' + orgId 
            + '/' + boId 
            + '/' + petId
            + '/' + solId
        ).toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}