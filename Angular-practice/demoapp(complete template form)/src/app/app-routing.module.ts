import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/auth.guard';
import { LoginComponent } from './servicecommunication/login/login.component';
import { LogoutComponent } from './servicecommunication/logout/logout.component';
import { OrderComponent } from './servicecommunication/order/order.component';
import { ProductComponent } from './servicecommunication/product/product.component';
import { ProductcreateComponent } from './servicecommunication/productcreate/productcreate.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'products',
    pathMatch:'full'
  },
  {path:'products', 
  component:ProductComponent,
  children:[
      {
        path:'new',
        component:ProductcreateComponent
      },
      {
        path:'edit/:id',
        component:ProductcreateComponent
      }     
    ],
    canActivate:[AuthGuard]
  },
  {path:'order', component:OrderComponent, canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
