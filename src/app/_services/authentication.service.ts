import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { User } from '../_models'
import { BackendService } from './backend.service'
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from "@angular/router";


const APP_USER_PROFILE = "NG_CRM_USER_2.0"
@Injectable()
export class AuthenticationService {
  user = new User();
  host:string="http://localhost:8080";

  constructor(
    private http: HttpClient,
    private router: Router,
    private backend: BackendService
  ) { }
/*
  login(user: any) {
    return this.backend.login('token', user)
      .map((response: Response) => {
        // login successful if there's a token in the response
        let data = (<any>response);
        let user = <User>data.user;
        if (user && data.access_token) {
          // store user details and token in local storage to keep user logged in between page refreshes
          user.token = data.access_token;
          user.isAuthenticated = true;
          localStorage.setItem(APP_USER_PROFILE, JSON.stringify(user));
        }
      });
  }
*/

  login(data) {
    return this.http.post(this.host+"/login", data, {observe: 'response'});
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    localStorage.removeItem('username');

    this.initParams();
  }

  initParams() {
    this.user.token = undefined;
    this.user.username = undefined;
    this.user.roles = undefined;
  }


  isAuthenticated() {
    let user =   this.user; //this.getUser() // <User>JSON.parse(localStorage.getItem(APP_USER_PROFILE));
    //return user.roles && (this.isAdmin() || this.isUser());
    return user && user.isAuthenticated ? true : false;
  }

  getUser(){
    let user = this.user;//<User>JSON.parse(localStorage.getItem(APP_USER_PROFILE));
    return user;
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.user.token=jwt;
    this.parseJWT();
    localStorage.setItem('username', this.user.username);
    localStorage.setItem('roles', this.user.roles.toString());
  }

  parseJWT() {
    let jwtHelper = new JwtHelperService();
    if (this.user.token != null ) {
      let objJWT = jwtHelper.decodeToken(this.user.token);
      this.user.username = objJWT.sub;
      this.user.roles = objJWT.roles;
      this.user.isAuthenticated = true;
    }
  }

  isAdmin() {
    return this.user.roles.indexOf('ADMIN') >= 0;
  }

  isSuperAdmin() {
    return this.user.roles.indexOf('SUPERADMIN') >= 0;
  }

  isHeadTeacher() {
    return this.user.roles.indexOf('HEADTEACHER') >= 0;
  }

  isTeacher() {
    return this.user.roles.indexOf('TEACHER') >= 0;
  }

  isPurpil() {
    return this.user.roles.indexOf('PURPIL') >= 0;
  }

  isBursar() {
    return this.user.roles.indexOf('BURSAR') >= 0;
  }

  isGuardian() {
    return this.user.roles.indexOf('GUARDIAN') >= 0;
  }

  loadToken() {
    this.user.token = localStorage.getItem('token');
    this.parseJWT();
  }

}
