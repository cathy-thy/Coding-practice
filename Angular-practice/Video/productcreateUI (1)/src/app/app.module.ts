import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './basics/child1/child1.component';
import { Child2Component } from './basics/child2/child2.component';
import { ProductComponent } from './parentchildcommunication/product/product.component';
import { ProductlistComponent } from './parentchildcommunication/productlist/productlist.component';
import { ProductlistitemComponent } from './parentchildcommunication/productlistitem/productlistitem.component';
import { ProductcreateComponent } from './parentchildcommunication/productcreate/productcreate.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
