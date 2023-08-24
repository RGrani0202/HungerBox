import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';
import { CafeItemsComponent } from './cafe-items/cafe-items.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [

  {
    path:'about',
    component:AboutComponent
  },
  {
    path: 'home',
    component: CustomerHomepageComponent
  },
  {
    path: '',
    redirectTo:'/home', pathMatch:'full'
  },

  { path: 'cafe/:cafeName', component: CafeItemsComponent },
  {
    component:ProductDetailsComponent,
    path:'details/:productId'
  },
  {
    component:CartPageComponent,
    path:'cart-page'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
