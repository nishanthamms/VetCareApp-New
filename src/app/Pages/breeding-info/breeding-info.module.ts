import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreedingInfoPageRoutingModule } from './breeding-info-routing.module';

import { BreedingInfoPage } from './breeding-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreedingInfoPageRoutingModule
  ],
  declarations: [BreedingInfoPage]
})
export class BreedingInfoPageModule {}
