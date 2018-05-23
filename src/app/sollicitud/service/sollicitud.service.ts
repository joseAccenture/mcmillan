import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Sollicitud } from "../../shared/model/sollicitud.model";
import { SollicitudDetall } from "../../shared/model/sollicitud.detall.model";
import { ApiRestService } from "../../shared/api/api.service";

import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class SollicitudService {

    //_Url = "../app/mock/sollicituds.json";

    private base_Url: string =  "http://localhost:8081/api/sollicitud";
    
    constructor(private webApi: ApiRestService, private http : Http) {
    }
    
    getSollicituds(): Observable<Sollicitud[]> {
        return this.webApi.getService(this.base_Url);
    }

    getSollicitudById(solId: string, orgId: string, boId: string, petId: string): Promise<SollicitudDetall> {
        return this.http.get(this.base_Url 
            + '/' + solId 
            + '/' + orgId 
            + '/' + boId 
            + '/' + petId
        ).toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}