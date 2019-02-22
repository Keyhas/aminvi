import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject, of, from } from 'rxjs';
import { MessageService } from 'primeng/components/common/messageservice';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap, first } from 'rxjs/operators';


@Injectable( {
  providedIn: 'root'
} )
export class AuthService {

  authState: any = null;
  user: BehaviorSubject<firebase.User> = new BehaviorSubject( null );

  constructor(
    // private af?: AngularFireModule,
    public fAuth: AngularFireAuth,
    private msg: MessageService,
    private db: AngularFirestore ) {
    this.authState = fAuth.authState;
    this.fAuth.authState.pipe(
      switchMap( user => {
        if ( user ) {
          return this.db.doc<any>( 'users/${user.uid}' ).valueChanges();
        } else {
          return of( null );
        }
      } ) );
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

  getUser() {
    return this.user.pipe( first() ).toPromise();
  }
  private updateUser( userData: UserData ) {
    const userRef: AngularFirestoreDocument<any> = this.db.doc( 'users/${user.id}' );

    return userRef.set( userData, { merge: true } );
  }

  getAllUsers() {
    const colRef = this.db.collection( 'users' );
    return colRef.get();
    // .subscribe( ( query ) => {
    //   console.log('query: ', query);
    //   return query.docs;

    // } );
  }

  createUser( userData: UserData, pass: string ): Observable<any> {
    return from(this.fAuth.auth.createUserWithEmailAndPassword( userData.email, pass ).then( _user => {
      userData.email = _user.user.email;
      userData.uid = _user.user.uid;
      userData.firstTime = true;
      _user.user.updateProfile( {
        displayName: userData.name,
        photoURL: userData.photo
      } );
      // this.db.doc( 'users/${userData.id}' ).set( userData );
      this.db.collection( 'users' ).doc( userData.uid ).set( {
        uid: _user.user.uid,
        name: userData.name,
        email: _user.user.email,
        photo: userData.photo,
        wishlist: [],
        relatedTo: userData.relatedTo,
        firstTime: true
      } );
    } ));
  }

  deleteUser( userData: UserData ): Observable<any> {
    return from( this.db.collection( 'users' ).doc( userData.uid ).delete() );
  }
}
export class EmailPasswordCredentials {
  email = '';
  password = '';
}

export class UserData {
  uid: string;
  name: string;
  email: string;
  photo: string;
  wishlist: string[];
  relatedTo: string[];
  firstTime: boolean;
  constructor() {
    this.name = '';
    this.email = '';
    this.photo = '';
    this.wishlist = [];
    this.relatedTo = [];
    this.firstTime = true;
  }
}
