import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true
    
}

  constructor() {
  }

}
