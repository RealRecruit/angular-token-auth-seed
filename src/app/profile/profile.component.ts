import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularTokenService } from 'angular-token';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  surveyTemplates = []
  topics = []

  constructor(public authTokenService: AngularTokenService,
              public authService: AuthService,
              private router: Router,
              private http: HttpClient) {
                let surveyTemplates = []
              }

  logOut() {
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }

  ngOnInit() {

    this.http.get(environment.token_auth_config.apiBase + 'organizations/3518/topics').subscribe((data: any) => {
      console.log('Topic data: ', data)
      this.topics = data.topics
      console.log(this.topics)      
    });

    this.http.get(environment.token_auth_config.apiBase + 'organizations/3518/survey_templates').subscribe((data: any) => {
      console.log('surveyTemplate data: ', data)
      this.surveyTemplates = data.survey_templates
      console.log(this.surveyTemplates)
    });
  }

}
