import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVaccinationPageRoutingModule } from './add-vaccination-routing.module';

import { AddVaccinationPage } from './add-vaccination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVaccinationPageRoutingModule
  ],
  declarations: [AddVaccinationPage]
})
export class AddVaccinationPageModule {}
