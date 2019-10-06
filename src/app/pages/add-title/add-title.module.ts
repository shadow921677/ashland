
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddTitlePage } from './add-title.page';
import { AddTitlePageRoutingModule } from './add-title-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTitlePageRoutingModule
  ],
  declarations: [
    AddTitlePage,
  ]
})
export class AddTitlePageModule { }
