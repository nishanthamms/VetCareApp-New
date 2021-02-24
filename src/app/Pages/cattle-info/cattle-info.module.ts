import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CattleInfoPageRoutingModule } from './cattle-info-routing.module';

import { CattleInfoPage } from './cattle-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CattleInfoPageRoutingModule
  ],
  declarations: [CattleInfoPage]
})
export class CattleInfoPageModule {}
