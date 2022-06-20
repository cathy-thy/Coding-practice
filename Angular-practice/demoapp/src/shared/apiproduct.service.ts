//responsible for sending HTTP call to API
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Product } from './product.module';

@Injectable({
  providedIn: 'root'
})
export class ApiproductService {

  private productsUrl="api/products";

  //true--> data has changed. Subscriber would know
  productlistUpdated = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.productsUrl);
  }

  addProduct(title:string, description:string, imagepath:string, quantity:string):
  Observable<Product>
  {
    const product = {title:title, description:description, imagepath:imagepath, quantity:quantity};
    return this.http.post<Product>(this.productsUrl, product);
  }
}
