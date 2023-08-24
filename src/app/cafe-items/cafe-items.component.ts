import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ShopdataService} from '../services/shopdata.service';
import { fooditems, shop, topbrands } from '../data-type';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-cafe-items',
  templateUrl: './cafe-items.component.html',
  styleUrls: ['./cafe-items.component.css']
})
export class CafeItemsComponent implements OnInit {
  cafeName: string | null = null;
  shops:undefined | shop[];
  topBrand:undefined | topbrands[];
  foodItems: undefined | fooditems[];
  constructor(private route: ActivatedRoute, private shopdata:ShopdataService, private http: HttpClient) {
    
   }
   
  ngOnInit(): void {
    this.cafeName = this.route.snapshot.paramMap.get('cafeName');
    this.shopdata.shops().subscribe((result)=>{
      console.warn(result)
      this.shops=result;
    })
    this.shopdata.topBrands().subscribe((result)=>{
      console.warn("result:"+result)
      this.topBrand=result;
    })

    this.shopdata.getfood().subscribe((result)=>{
      console.warn(result)
      this.foodItems=result;
    })
  }

 
}
  
  

