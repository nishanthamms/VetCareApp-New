import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinationInfoPage } from './vaccination-info.page';

const routes: Routes = [
  {
    path: '',
    component: VaccinationInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccinationInfoPageRoutingModule {}
