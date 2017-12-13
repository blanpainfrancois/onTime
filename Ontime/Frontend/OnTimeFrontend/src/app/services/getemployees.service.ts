import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GetemployeesService {
  constructor(private client : HttpClient) { }


    public getAllEmployees(){
      return this.client.get("http://ontimeapi.azurewebsites.net/swagger/#!/Employees/ApiEmployeesGet");
    }

    public getDataEmployee(){
      return this.client.get("http://ontimeapi.azurewebsites.net/swagger/#!/Employees/ApiEmployeesEmployeefromtokenGet");
    }
}
