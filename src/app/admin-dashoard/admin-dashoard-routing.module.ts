import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashoardPage } from './admin-dashoard.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDashoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashoardPageRoutingModule {}
