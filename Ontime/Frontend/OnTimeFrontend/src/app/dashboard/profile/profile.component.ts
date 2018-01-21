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
  costofhourgroup: FormGroup;

  constructor(private userService : UserService, private fb: FormBuilder, private _service: NotificationsService ){


    this.addressform = this.fb.group({
      streetname: ['' ],
      housenumber: [''],
      city: [''],
      zipcode: [''],
      country: ['']
       });

       this.costofhourgroup = this.fb.group({
        costofhour: ['']
       });






   }



  ngOnInit() {

    this.userService.getuser().subscribe(user => {
      this.user = new User();
      //console.log(user["createdAt"].toString().String.substring(0,user["createdAt"].toString().String.indexOf("T")));
      this.user.employerID = user["employerID"];
      this.user.username = user["username"];
      this.user.createdAt = user["createdAt"].toString().substring(0,user["createdAt"].indexOf("T"));
      this.user.identityID = user["identityID"];
      this.user.name = user["name"];
      this.user.hourofcost = user["HourCost"];
      });


    this.userService.getAddressofemployer().subscribe(data => {

      this.addressform.setValue({
        streetname: data["streetname"],
        housenumber:  data["housenumber"],
        city: data["city"],
        zipcode: data["zipcode"],
        country: data["country"],

      });





    })

    this.userService.getcostofhourofemployee().subscribe(data => {
      console.log(data);
      this.costofhourgroup.setValue({
        costofhour : data+""
      })
    })
  }

  postaddress(){

    this.userService.postAddress(this.addressform.value).subscribe(data => {
      this._service.success("Address succesfull updatet.")
    });

  }

  setHourWeight(){
    this.userService.Posthourcostemployer(this.costofhourgroup.value.costofhour).subscribe(data => {
      this._service.success("Cost of hour succesfull updatet.")
    });
  }



}
