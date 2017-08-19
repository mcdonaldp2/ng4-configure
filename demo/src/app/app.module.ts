import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgConfigureModule, ConfigureOptions } from 'ng4-configure/ng4-configure'
import { AppComponent } from './app.component';

export class myOptions extends ConfigureOptions {
  ConfigurationURL: string = "../assets/config.json"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgConfigureModule.forRoot()
  ],
  providers: [
    { provide: ConfigureOptions, useClass: myOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
