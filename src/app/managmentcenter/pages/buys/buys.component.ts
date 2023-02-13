import { Component, OnInit } from '@angular/core';
import { BuyI } from 'src/app/models/buy-i';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-buys',
  templateUrl: './buys.component.html',
  styleUrls: ['./buys.component.sass']
})
export class BuysComponent implements OnInit{
  buys: BuyI[] | undefined;

  constructor(private productSvr : ProductService){}

  ngOnInit(): void {
    this.getBuys();
  }

  getBuys(): void {
    this.productSvr.getBuys().subscribe((data) => {
      this.buys = data
      console.log(this.buys);
    });
  }

}
