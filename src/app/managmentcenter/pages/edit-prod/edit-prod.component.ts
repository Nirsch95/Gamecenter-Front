import { ProductService } from 'src/app/services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { prod } from 'src/app/models/product';
import { ProductI } from 'src/app/models/product-i';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
  styleUrls: ['./edit-prod.component.sass']
})
export class EditProdComponent implements OnInit{
closeResult: string = '';
@Input() idproduct: any = '';
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

constructor(private productSvr: ProductService,
  private modalService: NgbModal){}

ngOnInit(): void {
  this.getDatos();
}

getDatos(){
  this.product=this.idproduct;

}

editProduct(product: ProductI): void{
  product.id=this.idproduct.id;
  product.name=this.idproduct.name;
  product.description=this.idproduct.description;
  console.log(product);
  this.productSvr.editProduct(product).subscribe({

  });

  setTimeout(() => {
    window.location.reload();
  }, 2000);
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
