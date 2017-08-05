import { ConfigureService } from './ng-configure/ng-configure.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public configService: ConfigureService) {
    console.log(configService.config);
  }
}
