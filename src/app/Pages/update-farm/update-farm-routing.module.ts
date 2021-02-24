import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateFarmPage } from './update-farm.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateFarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateFarmPageRoutingModule {}
