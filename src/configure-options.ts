import { Injectable } from '@angular/core';

@Injectable()
export class ConfigureOptions {
    ConfigurationURL: string = 'assets/config.json';
    AppVersion: string = "";
    BustCache: boolean = false;
}
