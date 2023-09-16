import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'reported-item',
    loadChildren: () => import('./reported-item/reported-item.module').then( m => m.ReportedItemPageModule)
  },
  {
    path: 'admin-dashoard',
    loadChildren: () => import('./admin-dashoard/admin-dashoard.module').then( m => m.AdminDashoardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
