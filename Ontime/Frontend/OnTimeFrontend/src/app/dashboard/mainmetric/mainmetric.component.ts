import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { MetricsService } from '../../services/metrics.service';

@Component({
  selector: 'app-mainmetric',
  templateUrl: './mainmetric.component.html',
  styleUrls: ['./mainmetric.component.css']
})
export class MainmetricComponent implements OnInit {


  lat: number ;
  lng: number ;
  zoom : number = 13;
  allOptions: boolean = false;

  user : User;

  losthours;
  

  constructor(private userService : UserService, private metricsService: MetricsService) {

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
   }

   
   this.userService.getuser().subscribe(user => {
    this.user = new User();
    this.user.employerID = user["employerID"];
    this.user.username = user["username"];
    this.user.createdAt = user["createdAt"];
    this.user.identityID = user["identityID"];
    this.user.username = user["userName"];

    

  });

  this.gethours();

  


  }
  ngOnInit() {
  }

  gethours(){
    this.metricsService.getlosthoursofemployer().subscribe(data => {
      
      this.losthours = data+"";

    });
  }
}
