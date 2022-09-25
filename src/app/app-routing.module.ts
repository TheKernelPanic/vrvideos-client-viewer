import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'vr-videos',
    loadChildren: () => import('./vr-videos/vr-videos-routing.module').then(m => m.VrVideosRoutingModule),
  },
  {
    path: '**',
    redirectTo: 'vr-videos/home'
  },
  {
    path: '',
    redirectTo: 'vr-videos/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
