import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Constants } from '../Constants'


@Injectable()
export class RegisterService {

  

  constructor(private http: HttpClient) { }

   

  public register(model){

    let body = {
      "username": model.username,
      "password": model.password,
      "passwordvalidate": model.passwordvalidate,
      "givenName": model.givenname,
      "familyName": model.familyname,
      "role": model.role,
      "email": model.email
    }



    return this.http.post(Constants.CREATE_USER_ENDPOINT, body , {
      headers: new HttpHeaders().set('Content-Type', 'application/json-patch+json').append("Accept",": application/json").append("Access-Control-Allow-Origin", "*")      
    });
  }


  
} 


