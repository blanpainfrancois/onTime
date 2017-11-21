import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { routing  } from './routes/routes';


import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component'
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthService } from './services/auth.service';
import { RegisterService } from './services/register.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UserService } from './services/user.service'

import {MatToolbarModule, MatButtonModule,MatInputModule, MatRadioModule , MatIconModule , MatMenuModule} from '@angular/material';
import { MainmetricComponent } from './dashboard/mainmetric/mainmetric.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { TocapitalPipe } from './pipes/tocapital.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    BodyComponent,
    LoginComponent,
    LandingComponent,
    RegisterComponent,
    NotfoundComponent,
    DashboardComponent,
    MainmetricComponent,
    ProfileComponent,
    TocapitalPipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatMenuModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMBIzGWubc2qVa2vrjYcxlttDC4BxVJC4'
    })
  ],
  providers: [AuthService, RegisterService, AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
