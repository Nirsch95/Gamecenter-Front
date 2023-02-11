import { ProductsComponent } from './pages/products/products.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path:'',
        redirectTo: '/products',
        pathMatch: 'full'
      },
      {
        path:'products',
        component: ProductsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamecenterRoutingModule { }
