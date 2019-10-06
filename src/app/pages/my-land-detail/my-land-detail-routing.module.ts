import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyLandDetailPage } from './my-land-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MyLandDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLandDetailPageRoutingModule { }
