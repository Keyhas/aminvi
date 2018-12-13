import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFireModule } from '@angular/fire';
import { Observable } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  authState: any = null;
  user: Observable<firebase.User>;

  constructor(
    private af: AngularFireModule,
    public fAuth: AngularFireAuth ) {
     this.user = fAuth.authState;
  }

  doMailLogin(credentials: EmailPasswordCredentials) {
    this.fAuth
    .auth
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then( val => {
      console.log('Logged');
    })
    .catch( err => {
      console.log('err: ', err);
    });
  }
  logout() {
    this.fAuth
      .auth
      .signOut();
  }
}
export class EmailPasswordCredentials {
  email = '';
  password = '';
}
