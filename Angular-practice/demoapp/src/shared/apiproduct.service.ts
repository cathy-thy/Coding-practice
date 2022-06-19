//responsible for sending HTTP call to API
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product.module';

@Injectable({
  providedIn: 'root'
})
export class ApiproductService {

  private productsUrl="api/products";

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
