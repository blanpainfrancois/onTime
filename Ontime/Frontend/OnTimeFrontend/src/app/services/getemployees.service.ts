import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";
import { HttpHeaders } from '@angular/common/http/src/headers';

@Injectable()
export class GetemployeesService {
  constructor(private client : HttpClient, private router : Router, private authService: AuthService ) { }


    public getAllEmployees(){
      return this.client.get("http://ontimeapi.azurewebsites.net/api/Employees");
    }

    public getDataEmployee(){
      const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
      return this.client.get("http://ontimeapi.azurewebsites.net/api/Employees/employeefromtoken");
    }

    
}
