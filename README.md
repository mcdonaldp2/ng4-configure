# ng4-configure

angular 4 library to easily load a configuration file prior to application initialization and use it anywhere in your app.<br />
<br />
Screenshot of demo app:
![image](https://user-images.githubusercontent.com/9122526/29547764-14cd008e-86ca-11e7-9768-2f2e516a8f24.png)
## Usage

1. Use NPM to install ng4-configure into your project

    ``` npm install ng4-configure --save ```
2. Create a JSON config file for your project and store it somewhere accessible by the browser 
    ```json
    {
      "name": "Paul",
      "favoriteColor": "green",
      "google": "https://google.com",
      "ng4_configure_repo": "https://github.com/mcdonaldp2/ng4-configure"
    }
    ```
    a) In the demo this is stored in demo/src/assets/config.json 
3. Create a custom options class that extends ConfigureOptions:

   ```javascript
   
      import { ConfigureOptions } from 'ng4-configure/ng4-configure';

      export class MyOptions extends ConfigureOptions {
        ConfigurationURL: string = 'assets/config.json';
        AppVersion: string = '0.0.0';
        BustCache: boolean = false
      }
   ```
4. Add NgConfigureModule, ConfigureOptions, and your custom ConfigureOptions into your AppModule. Make sure to provide your custom ConfigureOptions.  `app.module.ts` should look something like this:

    ```javascript
        
        import { MyOptions }  from './my-options'
        import { BrowserModule } from '@angular/platform-browser';
        import { NgModule } from '@angular/core';
        import { NgConfigureModule, ConfigureOptions } from 'ng4-configure/ng4-configure'
        import { AppComponent } from './app.component';

        
        @NgModule({
          imports: [
            BrowserModule, 
            NgConfigureModule.forRoot()
            ],
          declarations: [AppComponent],
          providers: [
            { provide: ConfigureOptions, useClass: MyOptions} 
          ],
          bootstrap: [AppComponent],
        })
        export class AppModule { }
    ```
5.  Inject ConfigureService into any place in your project to access the config object in your code:
    ``` app.component.ts ```
    ```javascript
      import { Component } from '@angular/core';
      import { ConfigureService } from 'ng4-configure/ng4-configure';
      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
      })
      export class AppComponent {
        title = 'app';

        constructor(public configService: ConfigureService) {
          console.log("Here is the config loaded by ng4-configure:")
          console.log(configService.config);
        }
      }

    ```
    ``` app.component.html ```
    ```html
    <div style="text-align:center">
    <h1>
      Welcome to the ng4-configure demo app!
    </h1>
    <div style="padding: 15px">
      <p> 
        Hi! My name is {{this.configService.config.name}}.
      </p>
      <p>
        The url of this repo is <b>{{this.configService.config.ng4_configure_repo}}</b>
      </p>
      <p>
        Here is a link to <a [href]="this.configService.config.google">Google</a>
      </p>
    </div>
    ```
    
## ConfigureOptions Attributes

#### ConfigurationURL
  Specifies the location of the configuration file.  By default this location is set to ```'assets/config.json'```
#### AppVersion
  Specifies the version of the application.  To ensure that client browsers are getting the latest version of your config file after a release and not just a version that is cached in the browser, change this value when doing releases. The version will be appended to the url like so: <br />
    ``` http://localhost:1495/assets/config.json?v=<AppVersion> ```
  By default this is blank and will not append anything to the ConfigurationURL.
#### BustCache
  If set to true, will generate a random value to end of the ConfigurationURL to ensure that the config file is never cached:
  ``` http://localhost:1495/assets/config.json?t=<random value> ```
  By default this is set to false.

  
