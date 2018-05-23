import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Peticio} from "../../shared/model/peticio.model";
import { ApiRestService } from "../../shared/api/api.service";

@Injectable()
export class PeticioService {

    //_Url = "../app/mock/peticions.json";

    _Url = "http://localhost:8081/api/peticio";
    
    observablePeticio: Observable<Peticio[]>;
 
    constructor(private webApi: ApiRestService) {
        this.observablePeticio = this.webApi.getService(this._Url);
    }
    
    getItems(): Observable<Peticio[]> {
        return this.observablePeticio;
    }
}