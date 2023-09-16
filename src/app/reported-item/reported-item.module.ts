import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportedItemPageRoutingModule } from './reported-item-routing.module';

import { ReportedItemPage } from './reported-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportedItemPageRoutingModule
  ],
  declarations: [ReportedItemPage]
})
export class ReportedItemPageModule {}
