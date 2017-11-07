import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Registermodel } from "./registermodel"

import { RegisterService } from "../services/register.service";
import { AuthService } from '../services/auth.service';

import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router'
import { routerTransition } from '../router.transitions';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [routerTransition()]
  
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  

  message;
  error;

  constructor(private registerService: RegisterService, private authService: AuthService, 
    private router: Router, private fb: FormBuilder) {
      this.createForm();
     }

  ngOnInit() {
  
  }

  private createForm() {

    this.registerForm = this.fb.group({
      email: ['', Validators.required ],
      username: ['', [Validators.required , Validators.minLength(8)] ],
      password: ['', [Validators.required , Validators.minLength(8)] ],
      passwordvalidate: ['', Validators.required ],
      givenname: ['', Validators.required ],
      familyname: ['', Validators.required ],
      role: ['', Validators.required ]
    });
  }

  public register() {
    if(this.registerForm.valid){
      this.registerService.register(this.registerForm.value).subscribe(data => {
        
        
              if(data["succeeded"]){
                this.authService.logIn(this.registerForm.value.username, this.registerForm.value.password).subscribe( data => {
                  if(data){
                    this.authService.setToken(data);
                    this.router.navigate(["/dashboard"]);
                  }
                })
              }
              
            }, error => {this.error = error["error"]}
            
            );
    }
    
    
  }

}
