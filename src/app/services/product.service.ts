import { BuyI } from './../models/buy-i';
import { buy } from './../models/buy';
import { ProductI } from './../models/product-i';
import { map, Observable, retry } from 'rxjs';
import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdBuyI } from '../models/prodbuy-i';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiP = environment.API_URL_PRODUCT;
  apiB = environment.API_ULR_BUY;

  prods: ProdBuyI[] = [];

  push(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getPage(page: number): Observable<ProductI[]> {
    let direction = this.apiP + '/pagination/' + page;
    return this.http.get<ProductI[]>(direction);
  }

  getPage2(page: number): Observable<ProductI[]>{
    let direction = this.apiP+ '/pagination/' + page;
    return this.http.get<ProductI[]>(direction)
    .pipe(
      retry(3),
      map(products => products.filter(product => product.enabled === true && product.state === true))
    );
  }

  getTotalPages(): Observable<number> {
    let direction = this.apiP + '/getTotalPages';
    return this.http.get<number>(direction);
  }

  getAll(): Observable<ProductI> {
    let direction = this.apiP + '/getAll';
    return this.http.get<ProductI>(direction);
  }

  getProduct(id: string): Observable<ProductI> {
    let direction = this.apiP + '/get/' + id;
    return this.http.get<ProductI>(direction);
  }

  createProduct(product: ProductI): Observable<any> {
    console.log(product);
    let direction = this.apiP + '/create';
    return this.http.post<any>(direction, product, {
      responseType: 'text' as 'json',
    });
  }

  editProduct(product: ProductI): Observable<any> {
    let direction = this.apiP + '/update';
    return this.http.put<any>(direction, product);
  }

  createBuy(buy: buy): Observable<any> {
    let direction = this.apiB + '/create';
    return this.http.post<any>(direction, buy, {
      responseType: 'text' as 'json',
    });
  }

  getBuys(): Observable<BuyI[]> {
    let direction = this.apiB + '/getAll';
    return this.http.get<BuyI[]>(direction);
  }

  addCart(product: ProdBuyI) {
    this.prods.push(product);
    window.location.reload();
    localStorage.setItem('prods', JSON.stringify(this.prods));
  }

  getCart(){
    this.prods = JSON.parse(localStorage.getItem('prods') || '');
    return this.prods;
  }

}
