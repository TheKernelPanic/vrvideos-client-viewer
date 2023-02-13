import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ViewerComponent} from "./viewer/viewer.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'viewer/:videoUrl/:format',
    component: ViewerComponent
  },
  {
    path: 'vr-videos',
    redirectTo: 'vr-videos/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VrVideosRoutingModule { }
