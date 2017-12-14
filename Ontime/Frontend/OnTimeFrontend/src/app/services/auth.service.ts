import { Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';

import { Registermodel } from '../register/registermodel'


import { Constants } from '../Constants'
import { HttpParams } from '@angular/common/http';

@Injectable()
export class AuthService {

  public hasToken;
  public token;

  private tokenExpire : Date;

  constructor(private http: HttpClient, private router : Router) {

    if(localStorage.getItem('tokenUser')){
      this.token = JSON.parse(localStorage.getItem('tokenUser'));
    }



  }

  public setToken(token){
    if(token["access_token"]){
      this.token = token;
      this.tokenExpire = new Date();
      this.tokenExpire.setSeconds((token["expires_in"]));
      this.token["expires_on"] = this.tokenExpire;
      localStorage.setItem('tokenUser', JSON.stringify(this.token));

    }
  }



  public getToken(){
    return this.token
  }

  public isTokenExpired(){
    if(this.token){
      var now = new Date();
      var expiredate = new Date(this.token["expires_on"])

      if( now > expiredate){
          return true
      }
      else return false

    }
  }

  public logIn(username : string, password : string){

    const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('scope', Constants.SCOPE)
    .set('client_id', Constants.CLIENT_ID)
    .set('grant_type', Constants.GRANT_TYPE)
    

    return this.http.post("http://ontimeapi.azurewebsites.net/connect/token", body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });


  }

  public logout(): void {
            this.token = null;
            localStorage.removeItem('tokenUser');
            this.router.navigateByUrl('/login');
        }
}



