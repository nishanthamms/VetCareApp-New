import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCattlePage } from './update-cattle.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCattlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCattlePageRoutingModule {}
