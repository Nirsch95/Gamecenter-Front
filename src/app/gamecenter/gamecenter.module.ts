import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamecenterRoutingModule } from './gamecenter-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from './pages/products/products.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    GamecenterRoutingModule
  ]
})
export class GamecenterModule { }
