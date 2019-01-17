import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { AuthService, UserData } from 'src/app/services/auth.service';

@Component( {
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: [ './admin.component.scss' ]
} )
export class AdminComponent implements OnInit {

  userArr: UserData[];
  displayDialog = false;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getAllUsers().subscribe( ( res ) => {
      this.userArr = res.docs.map( el => el.data() );
      this.userArr.map( usrEl => usrEl.uid = String( res.docs.forEach( el => el.id ) ) );
    } );

    console.log( 'this.userArr: ', this.userArr );

  }

  showDialogToAdd() {
    this.displayDialog = true;
  }

  exit() {
    this.displayDialog = false;
  }

  saveNew() {
    this.displayDialog = false;
    alert( 'wip' );
  }
  updateUser( data ) {
    console.log( 'data: ', data );

  }

}
