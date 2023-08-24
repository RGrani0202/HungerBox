import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopdataService } from '../services/shopdata.service';
import { fooditems } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productData: undefined | fooditems;
  productQuantity: number = 1;
  constructor(private activeRoute:ActivatedRoute, private product:ShopdataService){}
  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    // console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((result)=>{
      // console.warn(result)
      this.productData=result;
    })
    
  }

  handleQuantity(val : string){
    if(this.productQuantity<20 && val ==='max'){
      this.productQuantity+=1
    }else if(this.productQuantity>1 && val ==='min'){
      this.productQuantity-=1
    }
  }

  AddItem(){
    if(this.productData){
      this.productData.quantity=this.productQuantity;
      if(!localStorage.getItem('user')){
        console.warn(this.productData);
        this.product.localAddItem(this.productData)

      }
      else{
        console.warn('else')
      }
    }
  }
}
