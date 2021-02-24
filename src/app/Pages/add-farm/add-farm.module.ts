import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFarmPageRoutingModule } from './add-farm-routing.module';

import { AddFarmPage } from './add-farm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFarmPageRoutingModule
  ],
  declarations: [AddFarmPage]
})
export class AddFarmPageModule {}
