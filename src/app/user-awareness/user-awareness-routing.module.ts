import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAwarenessPage } from './user-awareness.page';

const routes: Routes = [
  {
    path: '',
    component: UserAwarenessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAwarenessPageRoutingModule {}
