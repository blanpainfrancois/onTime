import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { LandingComponent} from '../landing/landing.component';
import { RegisterComponent } from '../register/register.component';
import { NotfoundComponent} from '../notfound/notfound.component'
import { DashboardComponent} from '../dashboard/dashboard.component';
import {TableFiltering} from '../filterlist/filterlist.component'
import { MainmetricComponent } from '../dashboard/mainmetric/mainmetric.component';
import { ProfileComponent } from '../dashboard/profile/profile.component';

import { AuthGuardService } from '../services/auth-guard.service';




const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component : DashboardComponent , canActivate: [AuthGuardService] ,
    children: [
      { path: '', component :MainmetricComponent },
      { path: 'profile', component: ProfileComponent}

    ]},
    { path: 'register', component: RegisterComponent},
    {path: 'filterlist', component: TableFiltering  },
    { path: '**', component: NotfoundComponent }
  ];


  export const routing = RouterModule.forRoot(appRoutes);
