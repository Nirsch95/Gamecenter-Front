import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/models/product-i';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit{

  products: ProductI[] | undefined;
  page: number = 0;
  quantity: number = 0;
  pages: Array<number> | undefined;

  constructor(private productSvr : ProductService){}

  ngOnInit(): void {
    this.getProducts();
    }

    getProducts(): void{
      this.productSvr.getPage(this.page).subscribe((data) => {
        this.products = data
        console.log(this.products);
      });
      this.productSvr.getTotalPages().subscribe((data) => (this.pages = new Array(data)));
    }

    isLast(): boolean {
      let totalPages: any = this.pages?.length;
      return this.page == totalPages - 1;
    }

    isFirst(): boolean {
      return this.page == 0;
    }

    previousPage(): void {
      !this.isFirst() ? (this.page--, this.getProducts()) : false;
    }

    nextPage(): void {
      !this.isLast() ? (this.page++, this.getProducts()) : false;
    }

    subtractQuantity(): void {
      if (this.quantity == 0){
        this.quantity = 0;
      }else{
        this.quantity--;
      }
    }

    addQuantity(): void {
      this.quantity++
    }

    getPage(page: number): void {
      this.page = page;
      this.getProducts();
    }
}
