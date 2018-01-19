import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import {GetemployeesService } from '../services/getemployees.service';
import { User } from '../models/user'
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent  {

  user : User ;


  constructor(private authService: AuthService, private userService : UserService) {


    if(authService.getToken()){
      if(authService.isTokenExpired()){
        this.signOut();
      }


      this.userService.getuser().subscribe(data  => {
        this.user = new User();
        this.user.employerID = data["employerID"];
        this.user.username = data["username"];
        this.user.createdAt = data["createdAt"];
        this.user.identityID = data["identityID"];
        this.user.username = data["userName"];
        this.userService.setUser(this.user);
        //console.log(data)
        this.userService.user.subscribe(data => this.user = data);

      }, error =>{
        this.authService.logout();

      } );

    }else{
      this.signOut();
        }


  }


  private signOut() {
    this.authService.logout();
  }

  private deleteUser(){
    this.userService.deleteUser().subscribe(data => {
      if(data["succeeded"]){
        this.signOut()
              }

    }


    )
  }



}
