import { Component, OnInit } from '@angular/core';

import { Product } from 'src/shared/product.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  storedProducts: Product[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  
  onNewProductAdded(newproduct:Product)
  {
    this.storedProducts.push(newproduct);
    console.log(this.storedProducts);
  }

}
