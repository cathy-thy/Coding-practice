import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Product } from './product.module';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb()
  {
    const products: Product[]=[
      new Product(1,"API Headphones", "Wireless BT 1", 
      "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
      1,["Amazing","Nice"]),
  
      new Product(2,"API Headphones", "Wireless BT 2", 
      "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
      100,["Amazing","Nice"]),
  
      new Product(3,"API Headphones", "Wireless BT 3", 
      "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
      100,["Amazing","Nice"]),
  
      new Product(4,"API Headphones", "Wireless BT 4", 
      "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
      100,["Amazing","Nice"]),
    ];

    return {products:products}; //api/products
    
  }

  genId(products:Product[]):number{
    return products.length>0? Math.max(...products.map(products=>products.id))+1
                              :1; //if no id before, then start with 1
  }
}
