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
import { OrderComponent } from './servicecommunication/order/order.component';
import { HeaderComponent } from './servicecommunication/header/header.component';
import { InMemoryDataService } from 'src/shared/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './servicecommunication/login/login.component';
import { LogoutComponent } from './servicecommunication/logout/logout.component';

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
    ProductcreateComponent,
    OrderComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
