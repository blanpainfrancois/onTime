import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  user : User;
  addressform: FormGroup;
  
  constructor(private userService : UserService, private fb: FormBuilder, private _service: NotificationsService ){

    this.userService.getuser().subscribe(user => {
      this.user = new User();
      this.user.employerID = user["employerID"];
      this.user.username = user["username"];
      this.user.createdAt = user["createdAt"];
      this.user.identityID = user["identityID"];
      this.user.name = user["name"];
    });


    this.userService.getAddressofemployer().subscribe(data => {

      this.addressform = this.fb.group({
        streetname: ['' ],
        housenumber: [''],
        city: [''],
        zipcode: [''],
        country: ['']
         });


    })

    
    
   }

 

  ngOnInit() {
  }

  postaddress(){

    this.userService.postAddress(this.addressform.value).subscribe(data => {
      this._service.success("Address succesfull updatet.")
    });

  }

  

}
