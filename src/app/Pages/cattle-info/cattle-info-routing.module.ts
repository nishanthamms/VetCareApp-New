import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CattleInfoPage } from './cattle-info.page';

const routes: Routes = [
  {
    path: '',
    component: CattleInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CattleInfoPageRoutingModule {}
