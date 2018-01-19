import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../router.transitions';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations:[fadeIn()]
})
export class LandingComponent implements OnInit {

  constructor(public authService : AuthService, private router: Router, private userService : UserService) { }


  public login() {

    this.router.navigate(["/login"]);

  }



  ngOnInit() {
  }

}
