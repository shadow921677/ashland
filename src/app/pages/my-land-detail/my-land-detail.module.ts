
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLandDetailPage } from './my-land-detail.page';
import { MyLandDetailPageRoutingModule } from './my-land-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MyLandDetailPageRoutingModule
  ],
  declarations: [
    MyLandDetailPage,
  ]
})
export class MyLandDetailPageModule { }
