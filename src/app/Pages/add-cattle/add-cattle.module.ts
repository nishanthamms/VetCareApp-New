import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddCattlePageRoutingModule } from './add-cattle-routing.module';
import { FileSizeFormatPipe } from './file-size-format.pipe';
import { AddCattlePage } from './add-cattle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddCattlePageRoutingModule
  ],
  declarations: [AddCattlePage , FileSizeFormatPipe]
})
export class AddCattlePageModule {}
