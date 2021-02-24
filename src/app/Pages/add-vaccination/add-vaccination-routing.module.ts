import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVaccinationPage } from './add-vaccination.page';

const routes: Routes = [
  {
    path: '',
    component: AddVaccinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddVaccinationPageRoutingModule {}
