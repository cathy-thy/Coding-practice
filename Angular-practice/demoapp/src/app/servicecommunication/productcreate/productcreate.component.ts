import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiproductService } from 'src/shared/apiproduct.service';
import { ProductService } from 'src/shared/product.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  //constructor(private productservice:ProductService) { }
  constructor(private apiproductservice:ApiproductService){}
  ngOnInit(): void {
  }

  onAddProduct(productForm:NgForm)
  {
    // this.productservice.addProduct
    //   (productForm.value.title,productForm.value.description,
    //     productForm.value.imagepath,productForm.value.quantity);

    this.apiproductservice
          .addProduct(productForm.value.title,productForm.value.description,
                      productForm.value.imagepath,productForm.value.quantity)
          .subscribe((resp)=>{
            console.log(resp);
            //next is used to admit data to the subscriber
            this.apiproductservice.productlistUpdated.next(true);
          });
  }

}
