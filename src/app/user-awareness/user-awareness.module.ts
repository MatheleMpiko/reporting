import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAwarenessPageRoutingModule } from './user-awareness-routing.module';

import { UserAwarenessPage } from './user-awareness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAwarenessPageRoutingModule
  ],
  declarations: [UserAwarenessPage]
})
export class UserAwarenessPageModule {}
