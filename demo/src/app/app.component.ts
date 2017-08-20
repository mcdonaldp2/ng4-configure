import { Component } from '@angular/core';
import { ConfigureService } from 'ng4-configure/ng4-configure';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  configStr: string;

  constructor(public configService: ConfigureService) {
    console.log("Here is the config loaded by ng4-configure:")
    console.log(configService.config);
    
    this.configStr = JSON.stringify(configService.config);
  }

  title = 'app';
}
