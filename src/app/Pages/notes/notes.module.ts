import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { NotesPageRoutingModule } from './notes-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NotesPage } from './notes.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
    Ng2SearchPipeModule,
    NotesPageRoutingModule
  ],
  declarations: [NotesPage]
})
export class NotesPageModule {}
