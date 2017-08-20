import { MyOptions } from './my-options';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgConfigureModule, ConfigureOptions } from 'ng4-configure/ng4-configure'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgConfigureModule.forRoot()
  ],
  providers: [
    { provide: ConfigureOptions, useClass: MyOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
