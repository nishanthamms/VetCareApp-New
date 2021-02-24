import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmInfoPage } from './farm-info.page';

const routes: Routes = [
  {
    path: '',
    component: FarmInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmInfoPageRoutingModule {}
