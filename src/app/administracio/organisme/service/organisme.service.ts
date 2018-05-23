import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Organisme } from "../../../shared/model/organisme.model";
import { ApiRestService } from "../../../shared/api/api.service";

@Injectable()
export class OrganismeService {

    //_Url = "../../../app/mock/organismes.json";

    private base_Url: string = "http://localhost:8081/api/organisme";
    
    constructor(private webApi: ApiRestService, private http : Http) {
    
    }
    
    getItems(): Observable<Organisme[]> {
        return this.webApi.getService(this.base_Url);
    }

    getOrganismeById(id: string): Promise<Organisme> {
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