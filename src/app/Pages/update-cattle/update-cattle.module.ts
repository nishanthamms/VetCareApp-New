import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCattlePageRoutingModule } from './update-cattle-routing.module';
import { FileSizeFormatPipe } from './file-size-format.pipe';
import { UpdateCattlePage } from './update-cattle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCattlePageRoutingModule
  ],
  declarations: [UpdateCattlePage , FileSizeFormatPipe]
})
export class UpdateCattlePageModule {}
