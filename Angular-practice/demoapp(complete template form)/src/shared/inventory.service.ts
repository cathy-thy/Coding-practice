import { Injectable } from '@angular/core';
import { Product } from './product.module';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private orderedProducts:Product[]=[];


  constructor() { }

  addOrder(product:Product)
  {
    this.orderedProducts.push(product);
    console.log(this.orderedProducts);
  }

  getOrderedProducts()
  {
    return this.orderedProducts;
  }

}
