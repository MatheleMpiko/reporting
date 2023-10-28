import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashoardPage } from './admin-dashoard.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDashoardPage,
 
  children: [
    {
      path: 'tab3',
      loadChildren: () =>
        import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
    },
    {
      path: 'tab2',
      loadChildren: () =>
        import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
    },
    {
      path: 'text-reports',
      loadChildren: () =>
        import('../text-reports/text-reports.module').then((m) => m.TextReportsPageModule),
    },
    {
      path: 'video',
      loadChildren: () =>
        import('../video/video.module').then((m) => m.VideoPageModule),
    },
    {
      path: 'audio',
      loadChildren: () =>
        import('../audio/audio.module').then((m) => m.AudioPageModule),
    },
    {
      path: '',
      redirectTo: '/admin-dashoard/tab3',
      pathMatch: 'full',
    },
  ],
},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashoardPageRoutingModule {}
