import { ConfigureOptions } from './ng2-configure/configure-options';
import { MyConfigOptions } from './my-config-options';

import { Http } from '@angular/http';
import { ConfigureService } from './ng2-configure/ng2-configure.service';
import { NgConfigureModule } from './ng2-configure/ng2-configure.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgConfigureModule.forRoot(),
  ],
  providers: [
        { provide: ConfigureOptions, useClass: MyConfigOptions}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
