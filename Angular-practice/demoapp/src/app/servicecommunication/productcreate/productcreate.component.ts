import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/shared/product.service';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
  }

  onAddProduct(productForm:NgForm)
  {
    this.productservice.addProduct
      (productForm.value.title,productForm.value.description,
        productForm.value.imagepath,productForm.value.quantity);
    
        
  }

}
