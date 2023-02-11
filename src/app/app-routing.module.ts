import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./gamecenter/gamecenter.module').then(m => m.GamecenterModule)
  },
  {
    path: 'cms',
    loadChildren: () => import('./managmentcenter/managmentcenter.module').then(m => m.ManagmentcenterModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
