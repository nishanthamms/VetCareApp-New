import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBreedingPageRoutingModule } from './update-breeding-routing.module';

import { UpdateBreedingPage } from './update-breeding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBreedingPageRoutingModule
  ],
  declarations: [UpdateBreedingPage]
})
export class UpdateBreedingPageModule {}
