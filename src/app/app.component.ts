import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {

  constructor( public authService: AuthService ) {

  }
  title = 'Aminvi';

  doLogout() {
    this.authService.logout();
  }
}
