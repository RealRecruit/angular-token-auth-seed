import { Component } from '@angular/core';
import {AngularTokenService} from 'angular-token';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private authToken: AngularTokenService) {
    // this.authToken.init(environment.token_auth_config);
  }
}
