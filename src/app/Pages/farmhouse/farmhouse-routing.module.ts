import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmhousePage } from './farmhouse.page';

const routes: Routes = [
  {
    path: '',
    component: FarmhousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmhousePageRoutingModule {}
