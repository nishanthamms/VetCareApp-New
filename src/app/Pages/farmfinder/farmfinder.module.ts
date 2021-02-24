import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmfinderPageRoutingModule } from './farmfinder-routing.module';

import { FarmfinderPage } from './farmfinder.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmfinderPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ['places']
    })
  ],
  declarations: [FarmfinderPage]
})
export class FarmfinderPageModule {}
