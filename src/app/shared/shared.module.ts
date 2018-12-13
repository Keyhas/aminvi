import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    CardModule,
  ],
  exports: [
    LoginComponent,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    CardModule
  ]
})
export class SharedModule { }
