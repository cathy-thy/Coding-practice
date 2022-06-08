import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Child1Component } from './basics/child1/child1.component';
// import { Child2Component } from './basics/child2/child2.component';
// import { ProductComponent } from './parentchildcommunication/product/product.component';
// import { ProductlistComponent } from './parentchildcommunication/productlist/productlist.component';
// import { ProductlistitemComponent } from './parentchildcommunication/productlistitem/productlistitem.component';
// import { ProductcreateComponent } from './parentchildcommunication/productcreate/productcreate.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './servicecommunication/product/product.component';
import { ProductService } from 'src/shared/product.service';
import { ProductlistComponent } from './servicecommunication/productlist/productlist.component';
import { ProductlistitemComponent } from './servicecommunication/productlistitem/productlistitem.component';
import { ProductcreateComponent } from './servicecommunication/productcreate/productcreate.component';

@NgModule({
  declarations: [
    AppComponent,
    // Child1Component,
    // Child2Component,
    // ProductComponent,
    // ProductlistComponent,
    // ProductlistitemComponent,
    // ProductcreateComponent,
    ProductComponent,
    ProductlistComponent,
    ProductlistitemComponent,
    ProductcreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
