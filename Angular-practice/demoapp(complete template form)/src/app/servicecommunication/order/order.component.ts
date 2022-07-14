import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/shared/inventory.service';
import { Product } from 'src/shared/product.module';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderedProductList:Product[];
  constructor(private inventoryservice:InventoryService) { }

  ngOnInit(): void {
    this.orderedProductList=this.inventoryservice.getOrderedProducts();
  }

}
