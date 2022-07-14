import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/shared/product.module';

@Component({
  selector: 'app-productlistitem',
  templateUrl: './productlistitem.component.html',
  styleUrls: ['./productlistitem.component.css']
})
export class ProductlistitemComponent implements OnInit {

 
  // product =  new Product(1,"Headphones", "Wireless BT", 
  // "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",
  // 100,["Amazing","Nice"]);

  //we will take product list from produtlist.components.ts
  //parent sends data to child (property binding)
  @Input() product:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
