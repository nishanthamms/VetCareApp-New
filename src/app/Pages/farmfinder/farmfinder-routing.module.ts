import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmfinderPage } from './farmfinder.page';

const routes: Routes = [
  {
    path: '',
    component: FarmfinderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmfinderPageRoutingModule {}
