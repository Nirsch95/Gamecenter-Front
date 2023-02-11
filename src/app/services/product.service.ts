import { ProductI } from './../models/product-i';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiP = environment.API_URL_PRODUCT;
  apiB = environment.API_ULR_BUY;

  push(arg0: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getPage(page: number): Observable<ProductI[]> {
    let direction = this.apiP + '/pagination/' + page;
    return this.http.get<ProductI[]>(direction);
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

}
