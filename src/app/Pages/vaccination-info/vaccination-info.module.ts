import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinationInfoPageRoutingModule } from './vaccination-info-routing.module';

import { VaccinationInfoPage } from './vaccination-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinationInfoPageRoutingModule
  ],
  declarations: [VaccinationInfoPage]
})
export class VaccinationInfoPageModule {}
