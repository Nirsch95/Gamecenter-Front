import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/models/product-i';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit{

  products: ProductI[] | undefined;
  page: number = 0;
  pages: Array<number> | undefined;

  constructor(private productSvr : ProductService){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.productSvr.getPage(this.page).subscribe((data) => {
      this.products = data
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

  getPage(page: number): void {
    this.page = page;
    this.getProducts();
  }


}
