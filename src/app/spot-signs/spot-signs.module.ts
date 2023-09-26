import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpotSignsPageRoutingModule } from './spot-signs-routing.module';

import { SpotSignsPage } from './spot-signs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpotSignsPageRoutingModule
  ],
  declarations: [SpotSignsPage]
})
export class SpotSignsPageModule {}
