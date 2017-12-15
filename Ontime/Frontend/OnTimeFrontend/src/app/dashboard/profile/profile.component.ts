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
      this.user.employerID = user["employerID"];
      this.user.username = user["username"];
      this.user.createdAt = user["createdAt"];
      this.user.identityID = user["identityID"];
      this.user.name = user["name"];
    });
    
   }

  ngOnInit() {
  }

}
