import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateFarmPageRoutingModule } from './update-farm-routing.module';

import { UpdateFarmPage } from './update-farm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateFarmPageRoutingModule
  ],
  declarations: [UpdateFarmPage]
})
export class UpdateFarmPageModule {}
