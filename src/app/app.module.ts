import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { CustomerHomepageComponent } from './customer-homepage/customer-homepage.component';
import { AboutComponent } from './about/about.component';
import { CafeItemsComponent } from './cafe-items/cafe-items.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerHomepageComponent,
    AboutComponent,
    
    CafeItemsComponent,
         ProductDetailsComponent,
         CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbScrollSpyModule, 
    FormsModule,
    AsyncPipe
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
