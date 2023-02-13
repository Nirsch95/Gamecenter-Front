import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamecenterRoutingModule } from './gamecenter-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ProductsComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    GamecenterRoutingModule,
    FormsModule
  ]
})
export class GamecenterModule { }
