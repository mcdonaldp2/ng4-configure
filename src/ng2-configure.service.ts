import { ConfigureOptions } from './configure-options';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigureService {
    public config: any;

    constructor(private http: Http, public configOptions: ConfigureOptions) {
        this.load();
    }

    public load(): Promise<any> {
        const promise = this.http.get(this.configOptions.ConfigurationURL)
                                .map(this.extractData)
                                .toPromise();
        promise.then(config => {
            this.config = config;
        });
        return promise;
    }

    private extractData(res: Response) {
        const body = res.json();

        return body || { };
    }
}
