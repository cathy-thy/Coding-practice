import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './servicecommunication/order/order.component';
import { ProductComponent } from './servicecommunication/product/product.component';
import { ProductcreateComponent } from './servicecommunication/productcreate/productcreate.component';

const routes: Routes = [
  {path:'products', 
  component:ProductComponent,
  children:[
      {
        path:'new',
        component:ProductcreateComponent
      }
    ]
  },
  {path:'order', component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
