import { BuyI } from './../../../models/buy-i';
import { buy } from './../../../models/buy';
import { ProdBuyI } from './../../../models/prodbuy-i';

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  closeResult: string = '';
  idTypes : string[] = ['TI', 'CC', 'RUT'];
  prods : ProdBuyI[] = [];
  buy : buy = {
    id: '',
    idType: '',
    clientId: '',
    clientName: '',
    products: [null],
  };

  constructor(private productSvr : ProductService,
    private modalService: NgbModal){}

  ngOnInit(): void {
    this.prods = this.productSvr.getCart();
    console.log(this.buy);

  }

  createBuy(buy: buy): void {
    this.buy.products = this.prods;
    console.log(this.buy);

    localStorage.removeItem('prods');
    this.productSvr.createBuy(buy).subscribe({
      next: (v) => {
        if(v) {
          console.log("creado");
          // setTimeout(() =>{
          //   window.location.reload();
          // }, 2000);
        }else{}
      },
      error: (e) =>
      console.log("fallo"),
      complete: () => {
        console.log("complete")
    },
    });

  }

  emptyCart(): void {
    localStorage.removeItem('prods');
    window.location.reload();
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
