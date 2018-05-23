import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Usuari } from "../../../shared/model/usuari.model";
import { ApiRestService } from "../../../shared/api/api.service";

@Injectable()
export class UsuariService {

    //_Url = "../../../app/mock/usuaris.json";

    _Url = "http://localhost:8081/api/usuari";
    
    observableUsuari: Observable<Usuari[]>;
 
    constructor(private webApi: ApiRestService) {
        this.observableUsuari = this.webApi.getService(this._Url);
    }
    
    getItems(): Observable<Usuari[]> {
        return this.observableUsuari;
    }
}