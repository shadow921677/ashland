import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyLandPage } from './my-land.page';
const routes: Routes = [
  {
    path: '',
    component: MyLandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLandPageRoutingModule {}
