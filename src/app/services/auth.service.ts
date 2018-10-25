import { Injectable } from '@angular/core';
import {AngularTokenService} from 'angular-token';
import {Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  userSignedIn$: Subject<boolean> = new Subject();

  constructor(private authService: AngularTokenService) {

    this.authService.validateToken().subscribe(
        res => res.status === 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    );
  }

  logOutUser(): Observable<Response> {

    return this.authService.signOut().map(
        res => {
          this.userSignedIn$.next(false);
          return res;
        }
    );
  }

  registerUser(signUpData:  {login: string, password: string, passwordConfirmation: string}): Observable<Response> {
    return this.authService.registerAccount(signUpData).map(
        res => {
          this.userSignedIn$.next(true);
          return res;
        }
    );
  }

  logInUser(signInData: {login: string, password: string}): Observable<Response> {
    return this.authService.signIn(signInData).map(
        res => {
          this.userSignedIn$.next(true);
          return res;
        }
    );

  }

}
