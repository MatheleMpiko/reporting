import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminDashoardPageRoutingModule } from './admin-dashoard-routing.module';

import { AdminDashoardPage } from './admin-dashoard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashoardPageRoutingModule
  ],
  declarations: [AdminDashoardPage]
})
export class AdminDashoardPageModule {}
