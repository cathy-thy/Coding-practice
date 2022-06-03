import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/shared/product.module';

@Component({
  selector: 'app-productlistitem',
  templateUrl: './productlistitem.component.html',
  styleUrls: ['./productlistitem.component.css']
})
export class ProductlistitemComponent implements OnInit {


  @Input() product:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
