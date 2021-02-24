import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBreedingPage } from './add-breeding.page';

const routes: Routes = [
  {
    path: '',
    component: AddBreedingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBreedingPageRoutingModule {}
