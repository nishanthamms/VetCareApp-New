import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCattlePage } from './add-cattle.page';

const routes: Routes = [
  {
    path: '',
    component: AddCattlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCattlePageRoutingModule {}
