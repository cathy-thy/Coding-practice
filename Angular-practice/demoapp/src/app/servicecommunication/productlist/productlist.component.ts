import { Component, OnInit } from '@angular/core';
import { ApiproductService } from 'src/shared/apiproduct.service';
import { Product } from 'src/shared/product.module';
import { ProductService } from 'src/shared/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist:Product[];
  
  //constructor(private productservice:ProductService) { }
  constructor(private apiproductservice:ApiproductService) { }
  ngOnInit(): void {
    //this.productlist = this.productservice.getProducts();

    //subscribe to the obervables (we are getting data in format of observable)
    this.apiproductservice.getProducts()
    .subscribe((productlist:Product[])=>{
      this.productlist=productlist;
    })
    
    console.log(this.productlist);
  }
}

