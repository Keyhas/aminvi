import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFireModule } from '@angular/fire';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  authState: any = null;
  user: Observable<firebase.User>;

  constructor(
    // private af?: AngularFireModule,
    public fAuth: AngularFireAuth,
    private msg: MessageService ) {
    this.user = fAuth.authState;
  }

  public doMailLogin( credentials: EmailPasswordCredentials ) {
    this.fAuth
      .auth
      .signInWithEmailAndPassword( credentials.email, credentials.password )
      .then( val => {
        console.log( 'Logged' );
        this.msg.add( { severity: 'success', summary: 'Login correcto', detail: 'Has entrado correctamente' } );
      } )
      .catch( err => {
        console.log( 'err: ', err );
        if ( err.code === 'auth/invalid-email' ) {
          this.msg.add( { severity: 'error', summary: 'Login incorrecto', detail: 'Ese correo no está bien escrito' } );
        } else if ( err.code === 'auth/wrong-password' ) {
          this.msg.add( { severity: 'error', summary: 'Login incorrecto', detail: 'Esa no es la contraseña' } );
        }
      } );
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
