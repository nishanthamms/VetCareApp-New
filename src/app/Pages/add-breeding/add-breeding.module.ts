import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBreedingPageRoutingModule } from './add-breeding-routing.module';

import { AddBreedingPage } from './add-breeding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBreedingPageRoutingModule
  ],
  declarations: [AddBreedingPage]
})
export class AddBreedingPageModule {}
