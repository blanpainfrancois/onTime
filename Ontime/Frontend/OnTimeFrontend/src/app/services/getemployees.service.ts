import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";
import {AuthService} from './auth.service';

@Injectable()
export class GetemployeesService {
  constructor(private client : HttpClient, private router : Router, private authService: AuthService) { }

    public getAllEmployees(){
      const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
<<<<<<< HEAD
      return this.client.get("http://ontimeapi.azurewebsites.net/api/Employees",{headers:headers});
=======
      return this.client.get("http://ontimeapi.azurewebsites.net/api/Employees"), {headers:headers};
>>>>>>> 303d8085d7cf5704299b19af8fba371982e77b9f

    }


    public getDataEmployee(){
      const headers = new HttpHeaders().set('Authorization', "Bearer " + this.authService.getToken()["access_token"]);
      return this.client.get("http://ontimeapi.azurewebsites.net/api/Employees/employeefromtoken");
    }

    
}
