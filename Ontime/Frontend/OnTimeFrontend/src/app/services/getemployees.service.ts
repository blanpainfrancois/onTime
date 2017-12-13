import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";

@Injectable()
export class GetemployeesService {
  constructor(private client : HttpClient, private router : Router) { }


    public getAllEmployees(){
      return this.client.get("http://ontimeapi.azurewebsites.net/swagger/#!/Employees/ApiEmployeesGet");
    }

    public getDataEmployee(){
      return this.client.get("http://ontimeapi.azurewebsites.net/swagger/#!/Employees/ApiEmployeesEmployeefromtokenGet");
    }
}
