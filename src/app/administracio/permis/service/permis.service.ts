import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiRestService } from "../../../shared/api/api.service";

@Injectable()
export class PermisService {

    // _Url = "../../../app/mock/roles.json";
     
    constructor(private webApi: ApiRestService) {
    
    }
}