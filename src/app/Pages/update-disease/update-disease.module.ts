import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDiseasePageRoutingModule } from './update-disease-routing.module';

import { UpdateDiseasePage } from './update-disease.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDiseasePageRoutingModule
  ],
  declarations: [UpdateDiseasePage]
})
export class UpdateDiseasePageModule {}
