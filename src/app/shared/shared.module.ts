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
import { AdminComponent } from './admin/admin.component';
import {TableModule} from 'primeng/table';
import {DialogModule, Dialog} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';




@NgModule({
  declarations: [LoginComponent, GiftedComponent, WishlistComponent, AdminComponent],
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
    TableModule,
    DialogModule,
    DropdownModule,
    ConfirmDialogModule
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
    TableModule,
    DialogModule,
    DropdownModule,
    ConfirmDialogModule,
    GiftedComponent,
    WishlistComponent,
    AdminComponent
  ]
})
export class SharedModule { }
