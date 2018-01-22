import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { LandingComponent} from '../landing/landing.component';
import { RegisterComponent } from '../register/register.component';
import { NotfoundComponent} from '../notfound/notfound.component'
import { DashboardComponent} from '../dashboard/dashboard.component';
import {TableFilter} from '../filterlist/filterlist.component'
import { MainmetricComponent } from '../dashboard/mainmetric/mainmetric.component';
import { ProfileComponent } from '../dashboard/profile/profile.component';

import { AuthGuardService } from '../services/auth-guard.service';
import { SubscribedemployeesComponent } from '../subscribedemployees/subscribedemployees.component';
import { IssuesComponent } from '../issues/issues.component';
import { OpenissuesComponent } from '../openissues/openissues.component';
import { ConceptComponent } from '../concept/concept.component';





const appRoutes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component : DashboardComponent , canActivate: [AuthGuardService] ,
    children: [
      { path: '', component :MainmetricComponent },
      { path: 'profile', component: ProfileComponent},
      {path: 'filterlist', component: TableFilter },
      {path: 'ownemployees', component: SubscribedemployeesComponent},
      {path: 'issues/:id', component: IssuesComponent},
      {path: 'openissues', component: OpenissuesComponent}
    ]},
    { path: 'openissues', component: OpenissuesComponent},
    { path: 'concept', component: ConceptComponent },
    { path: 'register', component: RegisterComponent },

    { path: '**', component: NotfoundComponent }
  ];


  export const routing = RouterModule.forRoot(appRoutes);
