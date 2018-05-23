import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Traza} from "../../shared/model/traza.model";
import { ApiRestService } from "../../shared/api/api.service";

/**
 * Trazabilitat Servei
 * 
 * Autor: Ildefonso Serrano García
 */
@Injectable()
export class TrazabilitatService {

    _Url = "../app/mock/traces.json";
    
    observableTraza: Observable<Traza[]>;
 
    constructor(private webApi: ApiRestService) {
        this.observableTraza = this.webApi.getService(this._Url);
    }
    
    getItems(): Observable<Traza[]> {
        return this.observableTraza;
    }
}