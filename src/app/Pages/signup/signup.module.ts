import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { SignupPage } from './signup.page';
import { AuthModule } from 'src/app/shared-modules/auth.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    AuthModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
