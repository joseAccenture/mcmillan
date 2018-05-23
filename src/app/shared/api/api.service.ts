import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

import { LogService, LOG_SERVICE } from "../log/log.service";

// import 'rxjs/add/operator/map';

@Injectable()
export class ApiRestService {

    constructor(private http: Http, @Inject(LOG_SERVICE) private logger: LogService) {
    }

    getService(url: string): Observable<any> {
        return this.http
            .get(url)
            // .map(this.extractData)
            // .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 
            'Server error';
        this.logger.logErrorMessage(errMsg);
        return Observable.throw(errMsg);
    }
}