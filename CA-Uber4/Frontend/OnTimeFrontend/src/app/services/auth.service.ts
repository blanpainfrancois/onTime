import { Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';

import { Registermodel } from '../register/registermodel'


import { Constants } from '../Constants'

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

    return Observable.fromPromise(new Promise((resolve, reject) => {

      var data = "client_id=ng&grant_type=password&username="+username+"&password="+password+"&scope=WebAPI%20openid%20profile";
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      
      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {

          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response))
         }
         
         else{
          reject(xhr.response);
         }
        }
      });
      
      xhr.open("POST", "http://localhost:5000/connect/token");
      xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader("cache-control", "no-cache");
      xhr.send(data);

    }))
  }

  public logout(): void {
            this.token = null;
            localStorage.removeItem('tokenUser');
            this.router.navigateByUrl('/login');
        }
}  



  