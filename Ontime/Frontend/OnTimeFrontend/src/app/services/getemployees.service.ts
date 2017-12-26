import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";
import {AuthService} from './auth.service';

const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);

@Injectable()
export class GetemployeesService {
  constructor(private client : HttpClient, private router : Router, private authService: AuthService) { }
  

    public getAllEmployees(){
      return this.client.get("http://ontimeapi.azurewebsites.net/api/Employees",{headers:headers});
    }

    public employeeToEmployer(id:number){
      return this.client.post("http://ontimeapi.azurewebsites.net/api/Employers/employeetoemployer?id=" + id, {headers:headers});
    }

    public getAllIssues(){
      return this.client.get("http://ontimeapi.azurewebsites.net/api/Issues", {headers:headers});
    }

    
}
