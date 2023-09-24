import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextReportsPage } from './text-reports.page';

const routes: Routes = [
  {
    path: '',
    component: TextReportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextReportsPageRoutingModule {}
