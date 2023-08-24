import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-customer-homepage',

  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.css']

})
export class CustomerHomepageComponent {
  // selectedCafe: string ='';
  constructor(private router: Router) {}

  selectCafe(cafe: string) {
    this.router.navigate(['/cafe', cafe]);
  }
  images = [1, 4, 6].map((n) => `assets/img${n}.png`);
}
