import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Backoffice } from "../../../shared/model/backoffice.model";
import { ApiRestService } from "../../../shared/api/api.service";

import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class BackofficeService {

    //_Url = "../../../app/mock/backoffices.json";

    headers: Headers;
    options: RequestOptions;

    private base_Url: string = "http://localhost:8081/api/backoffice";

    constructor(private webApi: ApiRestService, private http : Http) {
        this.headers = new Headers();
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('Accept', 'application/json');  
        this.options = new RequestOptions({ headers: this.headers });
    }
    
    getBackoffices(): Observable<Backoffice[]> {
        return this.webApi.getService(this.base_Url);
    }

    getBackofficeById(id: string): Promise<Backoffice> {
        return this.http.get(this.base_Url + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    filterBackoffices(codi: string, nom: string): Promise<Backoffice[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('codi', codi);
        params.set('nom', nom);	
        this.options = new RequestOptions({ headers: this.headers, search: params });
        return this.http.get(this.base_Url + '/filter', this.options)
            .toPromise()
            .then(response => response.json().data as Backoffice[])
            .catch(this.handleError);
        
    }

    addBackoofice(bo:Backoffice): Promise<Backoffice> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(bo);
        return this.http.post(this.base_Url, body, options)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }	

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); 
        return Promise.reject(error.message || error);
    }
}