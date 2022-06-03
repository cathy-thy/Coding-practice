import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/product.module';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist:Product[]=[
    new Product(1,"BT headphones1","Bluetooth device",
    "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg",
    1,["Amazing","nice"]),
    new Product(2,"BT headphones2","Bluetooth device",
    "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg",
    0,["Amazing","nice"]),
    new Product(3,"BT headphones3","Bluetooth device",
    "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg",
    2,["Amazing","nice"]),
    new Product(4,"BT headphones4","Bluetooth device",
    "https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__480.jpg",
    2,["Amazing","nice"])  
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
