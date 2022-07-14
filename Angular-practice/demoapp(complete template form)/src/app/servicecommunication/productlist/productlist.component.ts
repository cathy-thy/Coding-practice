import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private apiproductservice:ApiproductService, 
              private router:Router, 
              private route:ActivatedRoute) { }
  ngOnInit(): void {
    //this.productlist = this.productservice.getProducts();

    //subscribe to the obervables (we are getting data in format of observable)
    this.apiproductservice.getProducts()
    .subscribe((productlist:Product[])=>{
      this.productlist=productlist;
    });
    
    // subscriber
    this.apiproductservice.productlistUpdated.subscribe((data:boolean)=>
    {
      if(data){
        this.apiproductservice.getProducts()
        .subscribe((updatedproductlist:Product[])=>{
          this.productlist=updatedproductlist;
        });
      }
    })
    //console.log(this.productlist);
  }

  onAddNewProduct()
  {
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}

