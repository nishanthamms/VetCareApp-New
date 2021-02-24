import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EditProfilePageRoutingModule } from './edit-profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfilePage } from './edit-profile.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    EditProfilePageRoutingModule
  ],
  declarations: [EditProfilePage]
})
export class EditProfilePageModule {}
