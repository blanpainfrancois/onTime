import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";
import {AuthService} from './auth.service';
import { HttpHandler } from '@angular/common/http/src/backend';

//const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);


@Injectable()
export class GetemployeesService {
  constructor(private client : HttpClient, private router : Router, private authService: AuthService) { }


    public getAllEmployees(){
      const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
      return this.client.get("http://ontimeapi.azurewebsites.net/api/Employees",{headers:headers});
    }

  public getAllEmployers(){
    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
    return this.client.get("http://ontimeapi.azurewebsites.net/api/Employers",{headers:headers});
  }

  public employeeToEmployer(id:number){
      const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
      return this.client.post("http://ontimeapi.azurewebsites.net/api/Employers/employeetoemployer?employeeid=" + id, null ,{headers:headers});

    }

  public getSubscribedEmployees(){
    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
    return this.client.get("http://ontimeapi.azurewebsites.net/api/Employers/getsubcribedemployees",{headers:headers});
  }

  public getAllIssues(){
      const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
      return this.client.get("http://ontimeapi.azurewebsites.net/api/Issues", {headers:headers});
    }

  public getissuesfromboss(){
    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
    return this.client.get("http://ontimeapi.azurewebsites.net/api/Issues/issuesfromboss", {headers:headers});
  }
  public getissuesopenfromboss(){
    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
    return this.client.get("http://ontimeapi.azurewebsites.net/api/Issues/", {headers:headers});
  }


  public getIssuesFromEmployee(id : number){
    const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
    return this.client.get("http://ontimeapi.azurewebsites.net/api/Employers/GetissuesFromEmployee?employeeid=" + id, {headers:headers});
  }
}
