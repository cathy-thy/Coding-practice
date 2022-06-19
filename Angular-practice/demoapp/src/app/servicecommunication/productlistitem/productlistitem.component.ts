import { Component, Input, OnInit } from '@angular/core';
import { InventoryService } from 'src/shared/inventory.service';
import { Product } from 'src/shared/product.module';


@Component({
  selector: 'app-productlistitem',
  templateUrl: './productlistitem.component.html',
  styleUrls: ['./productlistitem.component.css']
})
export class ProductlistitemComponent implements OnInit {
  @Input() product:Product

  //we have to pass current product into here
  constructor(private inventoryservice:InventoryService) { }

  ngOnInit(): void {
  }

  
  onOrderStock()
  {
    this.inventoryservice.addOrder(this.product);
  }

}
