import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import { GiftedComponent } from './gifted/gifted.component';
import { WishlistComponent } from './wishlist/wishlist.component';



@NgModule({
  declarations: [LoginComponent, GiftedComponent, WishlistComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    ToastModule,
    TabViewModule,
  ],
  exports: [
    BrowserAnimationsModule,
    LoginComponent,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    CardModule,
    ToastModule,
    TabViewModule,
    GiftedComponent,
    WishlistComponent,
  ]
})
export class SharedModule { }
