import { Component, OnInit } from '@angular/core';
import { EmailPasswordCredentials, AuthService } from '../../services/auth.service';
@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
} )
export class LoginComponent implements OnInit {

  credentials = new EmailPasswordCredentials;
  constructor( private auth: AuthService) { }

  ngOnInit() {
    console.log(this.credentials);
  }
  doLogin() {
    this.auth.doMailLogin(this.credentials);
  }

  clear() {
    this.credentials.password = '';
    this.credentials.email = '';
  }

}
