import { ProductI } from './../../../models/product-i';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { prod } from 'src/app/models/product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent {

  product: prod = {
    id: '',
    name: '',
    description: '',
    inInventory: 0,
    enabled: true,
    min: 0,
    max: 0,
    image: '',
    state: true
  };

  constructor(private productSvr : ProductService){}

  createProduct(product: ProductI): void {
    console.log(product);
    this.productSvr.createProduct(product).subscribe({
      next: (v) => {
        if(v) {
          console.log("creado");
          setTimeout(() =>{
            window.location.reload();
          }, 2000);
        }else{}
      },
      error: (e) =>
      console.log("fallo"),
      complete: () => console.log("complete"),
    });
  }
}
