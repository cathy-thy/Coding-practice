import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiproductService } from 'src/shared/apiproduct.service';
import { Product } from 'src/shared/product.module';
import { ProductService } from 'src/shared/product.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  id:number;
  editMode:boolean;

  //send data to the form (name has to be the same as the form)
  @ViewChild('productForm') productForm:NgForm;

  //constructor(private productservice:ProductService) { }
  constructor(private apiproductservice:ApiproductService,
              private router:Router,
              private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id']!=null;
      this.initForm();
    })
  }
  //call getProduct in apiproduct.service.ts
  initForm()
  {
    let productItem:Product;
    this.apiproductservice.getProduct(this.id)
        //now you get the data
        .subscribe((product:Product)=>{productItem=product});
        //set timer, wait for 1s, then set value
        setTimeout(()=>{
          this.productForm.setValue({title:productItem.title,
            description:productItem.description, 
            imagepath:productItem.imagepath,
            quantity:productItem.quantity})
        }, 1000);

  }

  onAddProduct(productForm:NgForm)
  {
    // this.productservice.addProduct
    //   (productForm.value.title,productForm.value.description,
    //     productForm.value.imagepath,productForm.value.quantity);
    if(this.editMode==false){
      this.apiproductservice
            .addProduct(productForm.value.title,productForm.value.description,
                        productForm.value.imagepath,productForm.value.quantity)
            .subscribe((resp)=>{
              console.log(resp);
              //next is used to admit data to the subscriber
              this.apiproductservice.productlistUpdated.next(true);
      });
      this.router.navigate(['']);
    }
    else{
      let updatedProduct=new Product(this.id, productForm.value.title,
                                      productForm.value.description,
                                      productForm.value.imagepath,
                                      productForm.value.quantity)
      this.apiproductservice.updateProduct(updatedProduct)
      .subscribe((res)=>{
        this.apiproductservice.productlistUpdated.next(true);
      })
      this.router.navigate(['']);
    }
  }

}
