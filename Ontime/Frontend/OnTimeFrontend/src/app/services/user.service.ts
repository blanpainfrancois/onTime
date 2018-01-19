import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { URLSearchParams } from '@angular/http';

import { AuthService } from './auth.service'
import { User } from '../models/user';
import { Constants } from '../Constants';


@Injectable()
export class UserService {

  private userSource = new BehaviorSubject<User>(new User());
   user = this.userSource.asObservable();

  

  constructor(private http: HttpClient, private authService: AuthService) { }


  public getuser (){
    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);

    return this.http.get(Constants.GET_EMPLOYER, {headers:headers});
    
  }


  public setUser(user: User){

    this.userSource.next(user);

  }


  

  public deleteUser(){
    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
    return this.http.delete(Constants.DELETE_USER_ENDPOINT, {headers : headers} )
  }

  public postAddress(model){

    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
    return this.http.post(Constants.POST_ADDRESS_TO_EMPLOYER, model ,{headers : headers} );
  }

  public getAddressofemployer(){
    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
    return this.http.get(Constants.GET_ADDRESS_OF_EMPLOYER, {headers : headers} )

  }

  public getcostofhourofemployee(){
    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
    return this.http.get(Constants.GET_COST_HOUR, {headers : headers} )

  }

  public Posthourcostemployer (hourcost: number){
    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);


    return this.http.post(Constants.POST_HOUR_COST+"?hourcost=" + hourcost, null, {headers : headers} )

  }
  

}
