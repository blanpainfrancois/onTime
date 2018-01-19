import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Constants } from '../Constants'
import { AuthService } from './auth.service';

@Injectable()
export class MetricsService {

  constructor(private http: HttpClient, private authService: AuthService) { }



public getlosthoursofemployer(){
  const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
  return this.http.get<number>(Constants.GET_HOURSCOST_OF_EMPLOYER, {headers: headers});

}

public getcountofemployees(){
  const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
  return this.http.get<number>(Constants.GET_COUNT_OF_EMPLOYEES, {headers: headers});

}

}
