import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user : User

  constructor(private userService : UserService ){

    this.userService.getuser().subscribe(user => {
      this.user = new User();
      this.user.email = user["email"];
      this.user.familyName = user["familyName"];
      this.user.givenName = user["givenName"];
      this.user.username = user["userName"];
      this.user.role = user["role"];
    });
    
   }

  ngOnInit() {
  }

}
