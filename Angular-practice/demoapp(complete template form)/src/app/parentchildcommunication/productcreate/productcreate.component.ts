import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/shared/product.module';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {
  title:string;
  description:string;
  quantity:number;
  imagePath:string;

  @Output() newProductAdded = new EventEmitter<Product>();

  //addProductFlag:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct(productForm:NgForm)
  {
    //this.addProductFlag=true;
    let newproduct = new Product(100,productForm.value.title, productForm.value.description, productForm.value.imagePath, productForm.value.quantity);
    this.newProductAdded.emit(newproduct);
  }

}
