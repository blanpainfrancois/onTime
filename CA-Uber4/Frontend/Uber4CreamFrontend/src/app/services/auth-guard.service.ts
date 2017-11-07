import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate  {

  private signedIn: boolean;
  
  constructor(private authenticationService: AuthService, private router: Router) { }
  

  public canActivate(){
    if (localStorage.getItem('tokenUser')) {
        return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
  

}

 
