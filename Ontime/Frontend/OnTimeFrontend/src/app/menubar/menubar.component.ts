import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import * as _ from "lodash";


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  
})
export class MenubarComponent {

  user: User;
  

  constructor(private authService : AuthService, private userService : UserService) {
    this.userService.user.subscribe(data => {

      if(!_.isEmpty(data)){
        this.user = data;
      } 
      

    });
   }
change(){
  location.href = ("/concept");
}
   private signOut() {
    this.user = null;
    this.authService.logout();
  }

  private deleteUser(){
    this.userService.deleteUser().subscribe(data => {
      if(data["succeeded"]){
        this.user = null;
        this.signOut()
              }
    }
    
      
    )
  }

}
