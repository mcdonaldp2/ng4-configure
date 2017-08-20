import { ConfigureOptions } from './configure-options';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigureService {
    public config: any;

    constructor(private http: Http, public configOptions: ConfigureOptions) {}

    public load(): Promise<any> {
        const promise = this.http.get(this.buildUrl())
                                .map(this.extractData)
                                .toPromise();
        promise.then(config => {
            this.config = config;
        });
        return promise;
    }

    private buildUrl(): string {
        var url = this.configOptions.ConfigurationURL;
        if (this.configOptions.AppVersion !== '') {
            url += '?v=' + this.configOptions.AppVersion;
        }
        if (this.configOptions.BustCache) {
            url += '?t=' + this.makeId()
        }
        
        return url;
    }

    private makeId() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    private extractData(res: Response) {
        const body = res.json();

        return body || { };
    }
}
