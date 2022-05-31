import { Component, OnInit } from '@angular/core';

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

  addProductFlag:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct()
  {
    this.addProductFlag=true;
  }

}
