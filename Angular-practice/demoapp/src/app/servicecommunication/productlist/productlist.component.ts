import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/product.module';
import { ProductService } from 'src/shared/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist:Product[];
  
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.productlist = this.productservice.getProducts();
    console.log(this.productlist);
  }
}

