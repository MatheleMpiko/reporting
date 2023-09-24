import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextReportsPageRoutingModule } from './text-reports-routing.module';

import { TextReportsPage } from './text-reports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextReportsPageRoutingModule
  ],
  declarations: [TextReportsPage]
})
export class TextReportsPageModule {}
