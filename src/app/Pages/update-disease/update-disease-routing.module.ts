import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDiseasePage } from './update-disease.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDiseasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDiseasePageRoutingModule {}
