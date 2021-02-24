import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreedingInfoPage } from './breeding-info.page';

const routes: Routes = [
  {
    path: '',
    component: BreedingInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedingInfoPageRoutingModule {}
