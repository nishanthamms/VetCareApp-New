import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmhousePageRoutingModule } from './farmhouse-routing.module';

import { FarmhousePage } from './farmhouse.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    FarmhousePageRoutingModule
  ],
  declarations: [FarmhousePage]
})
export class FarmhousePageModule {}
