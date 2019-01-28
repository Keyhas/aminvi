import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { AuthService, UserData } from 'src/app/services/auth.service';

@Component( {
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: [ './admin.component.scss' ]
} )
export class AdminComponent implements OnInit {

  userArr: any[];
  displayDialog = false;
  relationshipsList: any[];
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getAllUsers().subscribe( ( res ) => {
      this.userArr = res.docs.map( el => {
          const data = el.data();
        console.log( el.id, data);
        return {uid: el.id, ...data};
      },  );
    } );

    console.log( 'this.userArr: ', this.userArr );

  }

  showDialogToAdd() {
    this.displayDialog = true;
    console.log(this.userArr);
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
