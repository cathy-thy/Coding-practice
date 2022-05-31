import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/product.module';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productlist: Product[]=[
    new Product(1,"Headphones", "Wireless BT 1", 
    "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
    100,["Amazing","Nice"]),

    new Product(2,"Headphones", "Wireless BT 2", 
    "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
    100,["Amazing","Nice"]),

    new Product(3,"Headphones", "Wireless BT 3", 
    "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
    100,["Amazing","Nice"]),

    new Product(4,"Headphones", "Wireless BT 4", 
    "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
    100,["Amazing","Nice"]),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
