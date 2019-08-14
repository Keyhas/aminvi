import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component( {
  selector: 'app-gifted',
  templateUrl: './gifted.component.html',
  styleUrls: [ './gifted.component.scss' ]
} )
export class GiftedComponent implements OnInit {

  showGifted = false;
  showWishlist = false;
  user: any;
  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.auth.getUser().subscribe( ( doc ) => {
      if ( doc.exists ) {
        this.user = doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log( "No such document!" );
      }
    } );
  }

  showWishlistToggle() {
    console.log( 'this.auth.user: ', this.user );
    this.showWishlist = !this.showWishlist;
  }

  showGiftedToggle() {
    this.showGifted = !this.showGifted;
  }

}
