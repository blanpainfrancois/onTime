import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import { Router } from '@angular/router'
import { routerTransition } from '../router.transitions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
  
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  

  constructor(private authService : AuthService, private router: Router, private userService : UserService) {

    this.userService.setUser(null)
    


    if(authService.getToken()){
      if(authService.isTokenExpired()){
        this.signOut();
      }
      else {
        this.router.navigateByUrl('/dashboard');
      }
    }else{
      this.signOut();
        }


   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }


  public login(){

                this.authService.logIn(this.loginForm.value.username, this.loginForm.value.password).subscribe( data => {
                  if(data["access_token"]){
                    this.authService.setToken(data);
                    this.router.navigate(["/dashboard"]);
                  }
                })
     
  }

  private signOut() {
    this.authService.logout();
    
    
  }
}
