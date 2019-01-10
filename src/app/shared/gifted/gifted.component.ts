import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifted',
  templateUrl: './gifted.component.html',
  styleUrls: ['./gifted.component.scss']
})
export class GiftedComponent implements OnInit {

  showGifted = false;
  showWishlist = false;
  constructor() { }

  ngOnInit() {
  }

  showWishlistToggle() {
    this.showWishlist = !this.showWishlist;
  }

  showGiftedToggle() {
    this.showGifted = !this.showGifted;
  }

}
