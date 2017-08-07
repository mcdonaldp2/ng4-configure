import { Http, HttpModule } from '@angular/http';
import { ConfigureOptions } from './configure-options';
import { ConfigureService } from './ng4-configure';
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    ConfigureService,
    ConfigureOptions,
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      multi: true,
      deps: [ConfigureService, Http]
    }
  ]
})
export class NgConfigureModule {
  public static forRoot(): ModuleWithProviders {
    return {
        ngModule: NgConfigureModule,
        providers: [ConfigureService, ConfigureOptions]
    };
  }
}

export function init(configService: ConfigureService, http: Http): () => Promise<any> {
  return () => configService.load();
}
