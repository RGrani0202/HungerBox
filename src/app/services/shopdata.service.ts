import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { fooditems, shop, topbrands } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class ShopdataService {

  constructor(private http:HttpClient) { }
  shops(){
    return this.http.get<shop[]>('http://localhost:3000/shops');
    // console.warn("service called")
   
  }
  topBrands(){
    return this.http.get<topbrands[]>('http://localhost:3000/topbrands');
  }
  getfood(){
  return this.http.get<fooditems[]>('http://localhost:3000/fooditems');
  }

  getProduct(id:string){
    return this.http.get<fooditems>(`http://localhost:3000/fooditems/${id}`);
  }
  localAddItem(data:fooditems){
    let cartData=[];
    let localCart = localStorage.getItem('localCart');
    if (!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]));
    }
    else{
      cartData=JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify([cartData]));


    }
  }
}
