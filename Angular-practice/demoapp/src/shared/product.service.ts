import { Injectable } from '@angular/core';
import { Product } from './product.module';

@Injectable(
  //entire app
  // {
  // providedIn: 'root'
  // }
)
export class ProductService {

  products: Product[]=[
    new Product(1,"Service Headphones", "Wireless BT 1", 
    "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
    1,["Amazing","Nice"]),

    new Product(2,"Service Headphones", "Wireless BT 2", 
    "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
    100,["Amazing","Nice"]),

    new Product(3,"Service Headphones", "Wireless BT 3", 
    "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
    100,["Amazing","Nice"]),

    new Product(4,"Service Headphones", "Wireless BT 4", 
    "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
    100,["Amazing","Nice"]),
  ];
  constructor() { }

  getProducts()
  {
    return this.products;
  }

  //function to add data to array
  addProduct(title:string, description:string, imagepath:string, quantity:number)
  {
    const newproduct=new Product(999,title,description, imagepath, quantity);
    this.products.push(newproduct);
    console.log(this.products)
  }
}
