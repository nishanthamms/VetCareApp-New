import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVaccinePageRoutingModule } from './update-vaccine-routing.module';

import { UpdateVaccinePage } from './update-vaccine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVaccinePageRoutingModule
  ],
  declarations: [UpdateVaccinePage]
})
export class UpdateVaccinePageModule {}
