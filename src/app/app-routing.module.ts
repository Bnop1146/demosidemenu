import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/tegneserier',
    pathMatch: 'full'
  },

  {
    path: 'pages/rejser',
    loadChildren: () => import('./pages/rejser/rejser.module').then( m => m.RejserPageModule)
  },
  {
    path: 'pages/tegneserier',
    loadChildren: () => import('./pages/tegneserier/tegneserier.module').then( m => m.TegneserierPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
