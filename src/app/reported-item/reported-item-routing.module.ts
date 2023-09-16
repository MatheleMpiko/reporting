import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportedItemPage } from './reported-item.page';

const routes: Routes = [
  {
    path: '',
    component: ReportedItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportedItemPageRoutingModule {}
