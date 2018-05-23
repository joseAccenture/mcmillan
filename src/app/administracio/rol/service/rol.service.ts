import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Rol } from "../../../shared/model/rol.model";
import { ApiRestService } from "../../../shared/api/api.service";

@Injectable()
export class RolService {

    //_Url = "../../../app/mock/roles.json";

    private base_Url: string = "http://localhost:8081/api/rol";
    
    constructor(private webApi: ApiRestService, private http : Http) {
        
    }
    
    getItems(): Observable<Rol[]> {
        return this.webApi.getService(this.base_Url);
    }

    getRolById(id: string): Promise<Rol> {
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