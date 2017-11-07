import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import { User } from '../models/user'

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
        this.user.email = data["email"];
        this.user.familyName = data["familyName"];
        this.user.givenName = data["givenName"];
        this.user.role = data["role"];
        this.user.username = data["userName"];
        this.userService.setUser(this.user);
        console.log(data)
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
