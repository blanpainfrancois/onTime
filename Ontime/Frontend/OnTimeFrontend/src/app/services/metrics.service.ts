import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Constants } from '../Constants';
import { AuthService } from './auth.service';

@Injectable()
export class MetricsService {

constructor(private http: HttpClient, private authService: AuthService) { }

public getlosthoursofemployer() {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken()['access_token']);
  return this.http.get<number>(Constants.GET_HOURSCOST_OF_EMPLOYER, {headers: headers});

}

public getcountofemployees() {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken()['access_token']);
  return this.http.get<number>(Constants.GET_COUNT_OF_EMPLOYEES, {headers: headers});
}

public gettopreason() {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken()['access_token']);
  return this.http.get<number>(Constants.GET_TOP_REASON, {headers: headers});
}
public gettopweekday() {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken()['access_token']);
  return this.http.get<number>(Constants.GET_TOP_WEEKDAY, {headers: headers});
}

public getopenissues() {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken()['access_token']);
  return this.http.get<any[]>(Constants.GET_OPEN_ISSUES, {headers: headers});
}

public getDataperiod(startdate: string, enddate: string) {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authService.getToken()['access_token']);
    const httpParams = new HttpParams();
    httpParams.set('startdate', startdate);
    httpParams.set('enddate', enddate);

  return this.http.get<Array<{key: string, value: number}>>(Constants.GET_START_END, {headers: headers, params : httpParams });
}

}
