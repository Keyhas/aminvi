import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gifted',
  templateUrl: './gifted.component.html',
  styleUrls: ['./gifted.component.scss']
})
export class GiftedComponent implements OnInit {

  showGifted = false;
  showWishlist = false;
  user: any;
  constructor(
    private auth: AuthService,
    ) { }

  ngOnInit() {
    this.auth.getUser().then( user => this.user = user );
  }

  showWishlistToggle() {
    console.log('this.auth.user: ', this.user);
    this.showWishlist = !this.showWishlist;
  }

  showGiftedToggle() {
    this.showGifted = !this.showGifted;
  }

}
