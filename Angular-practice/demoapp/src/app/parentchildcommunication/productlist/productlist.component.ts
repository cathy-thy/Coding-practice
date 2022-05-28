import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/product.module';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  product = new Product(1,"Headphones", "Wireless BT", "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_HK?wid=880&hei=530&$jpglarge$",100,["Amazing","Nice"]);
  constructor() { }

  ngOnInit(): void {
  }

}
