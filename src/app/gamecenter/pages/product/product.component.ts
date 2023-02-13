import { ProductI } from 'src/app/models/product-i';
import { Component, Input, OnInit } from '@angular/core';
import { ProdBuyI } from 'src/app/models/prodbuy-i';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit{
  @Input("producto") product !: ProductI;
  prodbuys: ProdBuyI = {
    id: '',
    image: '',
    quantity: 0
  };
  prods: ProdBuyI[] = [];

  constructor(private productSvr : ProductService){}

  ngOnInit(): void {
    console.log(this.product);
  }

  subtractQuantity(): void {
    if (this.prodbuys.quantity == 0){
      this.prodbuys.quantity = 0;
    }else{
      this.prodbuys.quantity--;
    }
  }

  addQuantity(): void {
    this.prodbuys.quantity++
  }

  addCart() {
    this.prodbuys.id = this.product.id;
    this.prodbuys.image = this.product.image;
    if (this.prodbuys.quantity == 0){
      console.log("No hay cantidades");

    }else{
      this.productSvr.addCart(this.prodbuys);
    }


  }
}
